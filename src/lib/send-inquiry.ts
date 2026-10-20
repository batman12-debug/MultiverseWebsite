"use server";

const INQUIRY_TO = "info@multiversegroupllc.com";

export type InquiryPayload = {
  source: string;
  fields: Record<string, string>;
};

export type InquiryResult =
  | { ok: true }
  | { ok: false; error: string };

function formatBody(source: string, fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
    .map(([key, value]) => `${key}: ${value.trim()}`);

  return [
    `New inquiry from MultiVerse Group website`,
    `Source: ${source}`,
    "",
    ...lines,
  ].join("\n");
}

async function sendWithZeptoMail(
  subject: string,
  text: string,
  replyTo?: string,
): Promise<boolean> {
  const token = process.env.ZEPTOMAIL_TOKEN;
  if (!token) return false;

  const apiKey = token.startsWith("Zoho-enczapikey ")
    ? token
    : `Zoho-enczapikey ${token}`;
  const endpoint =
    process.env.ZEPTOMAIL_API_URL ?? "https://cpaas.zoho.com/v1.1/email";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      from: {
        address: INQUIRY_TO,
        name: "MultiVerse Group",
      },
      to: [
        {
          email_address: {
            address: INQUIRY_TO,
            name: "MultiVerse Info",
          },
        },
      ],
      subject,
      textbody: text,
      htmlbody: `<pre style="font-family:ui-sans-serif,system-ui,sans-serif;white-space:pre-wrap">${text.replace(/</g, "&lt;")}</pre>`,
      ...(replyTo
        ? {
            reply_to: [
              {
                address: replyTo,
              },
            ],
          }
        : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("ZeptoMail error:", response.status, detail);
    throw new Error("Unable to deliver inquiry via ZeptoMail.");
  }

  return true;
}

async function sendWithFormSubmit(
  subject: string,
  fields: Record<string, string>,
): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${INQUIRY_TO}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...fields,
        _subject: subject,
        _template: "table",
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    console.error("FormSubmit error:", response.status, detail);
    throw new Error("Unable to deliver inquiry.");
  }
}

export async function sendInquiry(
  payload: InquiryPayload,
): Promise<InquiryResult> {
  try {
    const fields = Object.fromEntries(
      Object.entries(payload.fields).map(([key, value]) => [
        key,
        String(value ?? "").trim(),
      ]),
    );

    const subject = `[MultiVerse] ${payload.source}`;
    const text = formatBody(payload.source, fields);
    const replyTo = fields.email || fields["Contact Email"] || undefined;

    const sentViaZepto = await sendWithZeptoMail(subject, text, replyTo);
    if (!sentViaZepto) {
      await sendWithFormSubmit(subject, {
        ...fields,
        source: payload.source,
      });
    }

    return { ok: true };
  } catch (error) {
    console.error("sendInquiry failed:", error);
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email info@multiversegroupllc.com.",
    };
  }
}

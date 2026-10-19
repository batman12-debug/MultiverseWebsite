export const site = {
  name: "MultiVerse Group",
  tagline: "Architects of Global Healthcare Access",
  description:
    "MultiVerse Group is a global healthcare facilitator connecting high-net-worth patients with tier-1 medical institutions worldwide.",
  emails: {
    partnerships: "partnership@multiversegroupllc.com",
    info: "info@multiversegroupllc.com",
    support: "support@multiversegroupllc.com",
  },
  compliance: ["JCI-Aligned Standards", "HIPAA", "GDPR", "ATA"] as const,
  stats: [
    "150+ Tier-1 Facilities",
    "14 Jurisdictions",
    "$50M+ Annual Patient Volume",
    "HIPAA & GDPR Certified",
  ] as const,
  offices: [
    { city: "California", label: "Global Headquarters", region: "USA" },
    { city: "New York", label: "Patient Coordination", region: "United States" },
    { city: "London", label: "European Office", region: "Europe" },
    { city: "Dubai", label: "Regional Office", region: "Middle East" },
    { city: "Singapore", label: "Regional Office", region: "Asia Pacific" },
  ] as const,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Concierge", href: "/concierge" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] as const,
  footerNav: [
    { label: "About", href: "/about" },
    { label: "Clinical Verticals", href: "/verticals" },
    { label: "Partners", href: "/partners" },
    { label: "Patient Concierge", href: "/concierge" },
    { label: "Insights", href: "/insights" },
  ] as const,
};

export type Vertical = {
  slug: string;
  number: string;
  title: string;
  detail: string;
  overview: string;
  treatments: string[];
  candidate: string;
};

export const verticals: Vertical[] = [
  {
    slug: "urology-mens-health",
    number: "01",
    title: "Urology & Men’s Health",
    detail: "Advanced Vascular & Prosthetics",
    overview:
      "Confidential access to internationally recognized specialists delivering advanced diagnostics, restorative protocols, and complex surgical care for men’s health.",
    treatments: [
      "Advanced erectile dysfunction diagnostics",
      "Penile prosthetic surgery",
      "Vascular regeneration protocols",
      "Peyronie’s disease correction",
      "Robotic prostate surgery",
      "Male fertility assessment",
      "Testosterone optimization",
      "Reconstructive urology",
    ],
    candidate:
      "Designed for patients seeking discreet, specialist-led care after conservative treatment has not delivered the desired outcome.",
  },
  {
    slug: "regenerative-medicine",
    number: "02",
    title: "Regenerative Medicine",
    detail: "Stem Cells & Exosomes",
    overview:
      "Evidence-led cellular and biologic programs coordinated through vetted centers with rigorous protocols, transparent candidacy criteria, and longitudinal oversight.",
    treatments: [
      "Mesenchymal stem cell therapy",
      "Exosome protocols",
      "Platelet-rich plasma therapy",
      "Cellular joint restoration",
      "Autologous biologics",
      "Peptide-supported recovery",
      "Immune modulation programs",
      "Regenerative rehabilitation",
    ],
    candidate:
      "Appropriate for qualified patients exploring advanced biologic options for degenerative, inflammatory, or recovery-related concerns.",
  },
  {
    slug: "orthopedics-spine",
    number: "03",
    title: "Orthopedics & Spine",
    detail: "Minimally Invasive",
    overview:
      "Priority access to high-volume orthopedic and spine teams focused on mobility preservation, minimally invasive intervention, and accelerated recovery.",
    treatments: [
      "Minimally invasive spine surgery",
      "Robotic joint replacement",
      "Cartilage repair",
      "Sports injury reconstruction",
      "Disc replacement",
      "Arthroscopic procedures",
      "Complex revision surgery",
      "Post-operative rehabilitation",
    ],
    candidate:
      "For patients whose pain or mobility limitations require a definitive specialist opinion and a coordinated path to recovery.",
  },
  {
    slug: "longevity-endocrinology",
    number: "04",
    title: "Longevity & Endocrinology",
    detail: "Peptides & BHRT",
    overview:
      "Physician-directed longevity programs combining advanced diagnostics, metabolic medicine, and individualized endocrine optimization.",
    treatments: [
      "Comprehensive longevity diagnostics",
      "Bioidentical hormone therapy",
      "Peptide therapeutics",
      "GLP-1 medical weight management",
      "Metabolic optimization",
      "Executive health screening",
      "Sleep and recovery medicine",
      "Cellular aging assessment",
    ],
    candidate:
      "For proactive individuals seeking a medically supervised, data-driven strategy for healthspan, performance, and metabolic resilience.",
  },
  {
    slug: "oncology-access",
    number: "05",
    title: "Oncology Access",
    detail: "Clinical Trials & Second Opinions",
    overview:
      "Rapid coordination of multidisciplinary second opinions, advanced diagnostics, and treatment pathways at globally respected cancer centers.",
    treatments: [
      "Multidisciplinary second opinions",
      "Clinical trial navigation",
      "Advanced imaging coordination",
      "Precision oncology pathways",
      "Immunotherapy access",
      "Surgical oncology referrals",
      "Radiation oncology planning",
      "Survivorship continuity",
    ],
    candidate:
      "For patients seeking confirmation of diagnosis, access to advanced options, or an independent review of an existing treatment plan.",
  },
  {
    slug: "pain-management",
    number: "06",
    title: "Interventional Pain Management",
    detail: "Precision Care Pathways",
    overview:
      "Specialist access for persistent and complex pain, emphasizing precision diagnostics and minimally invasive interventions.",
    treatments: [
      "Precision pain diagnostics",
      "Image-guided injections",
      "Neuromodulation therapies",
      "Radiofrequency ablation",
      "Spinal cord stimulation",
      "Minimally invasive procedures",
      "Multimodal pain pathways",
      "Functional rehabilitation",
    ],
    candidate:
      "For patients living with persistent pain who require a specialist-led pathway beyond routine medication management.",
  },
];

export function getVertical(slug: string) {
  return verticals.find((v) => v.slug === slug);
}

export const leadership = [
  { name: "Muhammad Umair", role: "Co-Founder, CEO & COO", initials: "MU" },
  { name: "Muhammad Inam", role: "Managing Director", initials: "MI" },
  { name: "Dr. Fleming", role: "Chief Medical Officer", initials: "DF" },
  { name: "Brian Paul", role: "Head of Global Partnerships", initials: "BP" },
  { name: "Dr. Alina Robertson", role: "Director of Patient Concierge", initials: "AR" },
] as const;

export const journeySteps = [
  { number: "01", title: "Assess", copy: "Confidential inquiry and clinical record review." },
  { number: "02", title: "Align", copy: "Specialist and facility matching based on fit." },
  { number: "03", title: "Coordinate", copy: "Travel, admission, and concierge logistics." },
  { number: "04", title: "Continue", copy: "Recovery oversight and lifetime aftercare." },
] as const;

export const conciergeStages = [
  "Inquiry & Vetting",
  "Clinical Matching",
  "Travel & Visa Coordination",
  "Luxury Accommodation",
  "Treatment",
  "Lifetime Aftercare",
] as const;

export const conciergeServices = [
  "Private Transfers",
  "Medical Interpreters",
  "Medical Records Handling",
  "Family Accommodation",
] as const;

export const faqs = [
  {
    q: "How are clinical partners selected?",
    a: "We review accreditation, specialist experience, outcomes, patient safety protocols, and international patient infrastructure.",
  },
  {
    q: "Is my information confidential?",
    a: "Yes. Every inquiry follows strict privacy controls and is shared only with necessary clinical and coordination teams.",
  },
  {
    q: "How quickly can I receive options?",
    a: "Timing depends on complexity, but our team begins clinical review as soon as complete records are received.",
  },
  {
    q: "Do you arrange visas and travel?",
    a: "We coordinate invitation documentation, private transfers, accommodation, interpreters, and other journey logistics.",
  },
  {
    q: "What happens after treatment?",
    a: "We coordinate discharge records, remote follow-up, and continuity with your home physician where appropriate.",
  },
] as const;

export const insights = [
  {
    title: "Cross-Border Regenerative Medicine: 2026 Outlook",
    date: "September 12, 2026",
    category: "Market Outlook",
  },
  {
    title: "The Rise of Longevity Tourism",
    date: "August 28, 2026",
    category: "Longevity",
  },
  {
    title: "How Global Patients Select Tier-1 Facilities",
    date: "August 04, 2026",
    category: "Patient Access",
  },
  {
    title: "Peptide Therapeutics: The New Frontier",
    date: "July 19, 2026",
    category: "Clinical Innovation",
  },
  {
    title: "Medical Travel Logistics at Institutional Scale",
    date: "June 30, 2026",
    category: "Operations",
  },
  {
    title: "Understanding JCI Accreditation",
    date: "June 08, 2026",
    category: "Governance",
  },
] as const;

export const partnerValues = [
  {
    title: "Zero CAC",
    copy: "Patient acquisition without conventional advertising spend.",
  },
  {
    title: "Pre-Qualified Inquiries",
    copy: "Clinical fit and financial readiness reviewed before routing.",
  },
  {
    title: "VIP Concierge Logistics",
    copy: "End-to-end international travel and patient coordination.",
  },
] as const;

export const partnershipModels = [
  {
    number: "01",
    title: "Revenue Share",
    copy: "A performance-aligned model for sustained international patient volume.",
  },
  {
    number: "02",
    title: "Pay-Per-Qualified-Consultation",
    copy: "A precise model built around attended, clinically relevant consultations.",
  },
  {
    number: "03",
    title: "Exclusive Regional Alliance",
    copy: "Category leadership within selected markets and treatment verticals.",
  },
] as const;

export const onboardingSteps = [
  "Application",
  "Clinical Audit",
  "Alignment Agreement",
  "Patient Routing",
] as const;

export const specialtyOptions = [
  "Urology & Men’s Health",
  "Regenerative Medicine",
  "Orthopedics",
  "Longevity & Aesthetics",
  "Oncology",
  "Neurology & Pain",
  "Other",
] as const;

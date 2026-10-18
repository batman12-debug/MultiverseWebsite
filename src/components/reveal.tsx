"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  as?: "div" | "section" | "article" | "aside" | "li" | "p" | "h1" | "h2" | "ul";
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "clip";
  immediate?: boolean;
  style?: CSSProperties;
};

/**
 * Hydration-safe reveal: server + first client paint match.
 * Shown state is React state — never imperative classList on foreign nodes.
 */
export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  variant = "up",
  immediate = false,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);
  const [shown, setShown] = useState(false);
  const Tag = as;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(true);

    if (reduced) {
      setShown(true);
      return;
    }

    if (immediate) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const classes = [
    className,
    "reveal-item",
    `reveal-${variant}`,
    active && !shown ? "reveal-pending" : "",
    shown ? "is-revealed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as never}
      className={classes}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

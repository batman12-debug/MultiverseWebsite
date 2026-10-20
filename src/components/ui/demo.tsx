"use client";

import type { ElementType } from "react";
import { MinimalCarousel, type CarouselCard } from "./base";

function MerakiIcon({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/meraki-icon.svg"
      alt="Meraki Integrative"
      width={size}
      height={size}
      className={className}
    />
  );
}

function clinicIcon(src: string, alt: string): ElementType {
  function ClinicIcon({
    size = 28,
    className,
  }: {
    size?: number;
    className?: string;
  }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-md bg-white object-contain p-0.5 ${className ?? ""}`}
      />
    );
  }
  ClinicIcon.displayName = `ClinicIcon(${alt})`;
  return ClinicIcon;
}

/* Brand palette: gold + charcoal surfaces (matches site, not chart rainbow) */
const COLORS = [
  "bg-gold",
  "bg-surface-raised",
  "bg-secondary",
  "bg-accent",
  "bg-[oklch(28%_0.05_84)]",
] as const;

function card(
  id: string,
  title: string,
  value: string,
  logo: string,
  colorIndex: number,
): CarouselCard {
  return {
    id,
    title,
    value,
    color: COLORS[colorIndex % COLORS.length],
    icon: clinicIcon(`/assets/clinics/${logo}`, title),
  };
}

const CARDS: CarouselCard[] = [
  {
    id: "meraki",
    title: "Meraki",
    value: "Strategic Partner · New York",
    color: "bg-gold",
    icon: MerakiIcon,
  },

  // California
  card("ucsf", "UCSF Health", "California", "ucsf.png", 0),
  card("cedars-sinai", "Cedars-Sinai", "California", "cedars-sinai.png", 1),
  card("stanford", "Stanford Health Care", "California", "stanford.png", 2),
  card("ucla", "UCLA Health", "California", "ucla.png", 3),

  // New York
  card("nyp", "NewYork-Presbyterian", "New York", "nyp.png", 4),
  card("mount-sinai", "Mount Sinai", "New York", "mount-sinai.png", 0),
  card("nyu-langone", "NYU Langone Health", "New York", "nyu-langone.png", 1),
  card("msk", "Memorial Sloan Kettering", "New York", "msk.png", 2),

  // Singapore
  card("nuh", "National University Hospital", "Singapore", "nuh.png", 3),
  card("sgh", "Singapore General Hospital", "Singapore", "sgh.png", 4),
  card("mount-elizabeth", "Mount Elizabeth Hospital", "Singapore", "mount-elizabeth.png", 0),
  card("gleneagles", "Gleneagles Hospital", "Singapore", "gleneagles.png", 1),

  // Pakistan
  card("aga-khan", "Aga Khan University Hospital", "Pakistan", "aga-khan.png", 2),
  card("shaukat-khanum", "Shaukat Khanum Hospital", "Pakistan", "shaukat-khanum.png", 3),
  card("south-city", "South City Hospital", "Pakistan", "south-city.png", 4),
  card("doctors-hospital", "Doctors Hospital Lahore", "Pakistan", "doctors-hospital.png", 0),

  // Wyoming
  card("wyoming-medical", "Wyoming Medical Center", "Wyoming", "wyoming-medical.png", 1),
  card("cheyenne-regional", "Cheyenne Regional", "Wyoming", "cheyenne-regional.png", 2),
  card("st-johns", "St. John's Health", "Wyoming", "st-johns.png", 3),
  card("ivinson", "Ivinson Memorial Hospital", "Wyoming", "ivinson.png", 4),

  // Dubai
  card("american-hospital-dubai", "American Hospital Dubai", "Dubai", "american-hospital-dubai.png", 0),
  card("mediclinic", "Mediclinic City Hospital", "Dubai", "mediclinic.png", 1),
  card("kings-dubai", "King's College Hospital Dubai", "Dubai", "kings-dubai.png", 2),
  card("aster", "Aster Hospital", "Dubai", "aster.png", 3),

  // London
  card("london-clinic", "The London Clinic", "London", "london-clinic.png", 4),
  card("cleveland-london", "Cleveland Clinic London", "London", "cleveland-london.png", 0),
  card("guys-st-thomas", "Guy's and St Thomas'", "London", "guys-st-thomas.png", 1),
  card("harley-street", "The Harley Street Clinic", "London", "harley-street.png", 2),
];

export default function MinimalCarouselDemo() {
  return <MinimalCarousel cards={CARDS} />;
}

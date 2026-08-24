import {
  Aperture,
  Building2,
  ClipboardList,
  Command,
  Compass,
  DraftingCompass,
  FileCheck2,
  HardHat,
  HeartHandshake,
  Hexagon,
  Landmark,
  Layers,
  LayoutGrid,
  Mountain,
  Satellite,
  Scale,
  Timer,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/BrandIcons";

export const site = {
  name: "Meridian",
  fullName: "Meridian Land Surveying",
  tagline: "Precise Surveys. Confident Decisions.",
  description:
    "Meridian Land Surveying is a licensed land surveying firm providing boundary surveys, ALTA/NSPS title surveys, topographic mapping, construction staking and FEMA elevation certificates across Central Texas.",
  phoneDisplay: "+1 (555) 240-7788",
  phoneHref: "tel:+15552407788",
  whatsapp:
    "https://wa.me/15552407788?text=Hi%20Meridian!%20I%E2%80%99d%20like%20a%20quote%20for%20a%20land%20survey.",
  email: "surveys@meridiansurveying.com",
  address: "1250 Courthouse Square, Suite 204, Austin, TX 78701",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=1250+Congress+Ave,+Austin,+TX+78701&z=16&output=embed",
  mapsLink: "https://maps.google.com/?q=1250+Congress+Ave,+Austin,+TX+78701",
};

export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X (Twitter)", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const socialIconMap: Record<string, ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  "X (Twitter)": XIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  features: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "boundary-surveys",
    title: "Boundary & Mortgage Surveys",
    short:
      "Legally defensible property line determinations for owners, buyers and lenders — corners marked on the ground, not just on paper.",
    long: "Whether you’re settling a fence line, planning an addition or refinancing, we locate your exact boundaries per the written deed and state standards. Corners are staked and flagged in the field, and every plat is signed and sealed by a licensed Professional Land Surveyor.",
    features: [
      "Corner staking & monumentation",
      "Fence & encroachment resolution",
      "Mortgage inspection surveys",
      "Building setback verification",
    ],
    icon: Scale,
  },
  {
    slug: "alta-title-surveys",
    title: "ALTA/NSPS Land Title Surveys",
    short:
      "The gold-standard survey required by lenders and title companies on commercial real estate transactions.",
    long: "Our ALTA surveys meet the rigorous ALTA/NSPS Minimum Standard Detail Requirements, coordinated directly with your title commitment so surprises surface before closing — never after. Accepted by national lenders, insurers and attorneys nationwide.",
    features: [
      "Table A item selection",
      "Easement & encumbrance plotting",
      "Zoning report integration",
      "Nationwide lender acceptance",
    ],
    icon: FileCheck2,
  },
  {
    slug: "topographic-surveys",
    title: "Topographic Surveys",
    short:
      "Contour mapping that gives architects, engineers and planners the ground truth they design on.",
    long: "Bare-earth contours, utilities, drainage, trees and existing structures captured with drone photogrammetry and ground-based instruments — delivered in CAD and PDF formats your design team can use the same day they receive them.",
    features: [
      "1-ft contour intervals",
      "Utility & drainage mapping",
      "Drone photogrammetry",
      "CAD (DWG) deliverables",
    ],
    icon: Mountain,
  },
  {
    slug: "construction-staking",
    title: "Construction Staking & Layout",
    short:
      "Your crews pour concrete exactly where the plans say — the first time, every time.",
    long: "From rough grading to final as-built certification, our field crews stake offsets, batter boards, gridlines and utilities. Need a design change mid-build? We provide same-day revisions to keep your schedule moving.",
    features: [
      "Site & utility layout",
      "Foundation & footing stakes",
      "As-built certifications",
      "GPS machine control models",
    ],
    icon: HardHat,
  },
  {
    slug: "subdivision-platting",
    title: "Subdivision Platting",
    short:
      "Complete platting support from the first preliminary sketch through the recorded final plat.",
    long: "We manage the entire entitlement workflow for developers — preliminary plats, lot fit analysis, rezoning exhibits and final plats — including presentations to planning commissions and commissioners’ court on your behalf.",
    features: [
      "Preliminary & final plats",
      "Lot fit & yield analysis",
      "Variance & zoning exhibits",
      "Recording coordination",
    ],
    icon: LayoutGrid,
  },
  {
    slug: "flood-certificates",
    title: "Flood Elevation Certificates",
    short:
      "FEMA-compliant elevation certificates that can significantly lower your flood insurance premiums.",
    long: "Licensed elevation surveys of finished floors, crawlspaces and machinery for NFIP lenders and insurers — including LOMA/LOMR applications that can remove structures from special flood hazard areas entirely.",
    features: [
      "NFIP elevation certificates",
      "LOMA / LOMR applications",
      "Finished floor verification",
      "Insurance premium reviews",
    ],
    icon: Waves,
  },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Parcels Surveyed" },
  { value: 25, suffix: "+", label: "Years in Business" },
  { value: 40, suffix: "+", label: "Counties Served" },
  { value: 99, suffix: "%", label: "First-Pass Approval" },
];

export type Brand = { name: string; icon: LucideIcon };

export const brands: Brand[] = [
  { name: "Lone Star Title", icon: Landmark },
  { name: "BuildRight Contractors", icon: HardHat },
  { name: "Harborview Dev.", icon: Building2 },
  { name: "Oak Ridge Realty", icon: Hexagon },
  { name: "Metro Engineering", icon: Command },
  { name: "GreenField Homes", icon: Trees },
  { name: "Cascade Land Co.", icon: Layers },
  { name: "Pinnacle Legal", icon: Aperture },
];

export const whyChoose = [
  {
    title: "Licensed & insured",
    text: "Every survey is signed and sealed by a state-licensed Professional Land Surveyor — and backed by full E&O coverage.",
    icon: Landmark,
  },
  {
    title: "Cutting-edge technology",
    text: "GNSS receivers, robotic total stations and FAA-certified drone photogrammetry deliver millimeter-level accuracy.",
    icon: Satellite,
  },
  {
    title: "Fast turnaround",
    text: "Most residential surveys are delivered in 3–5 business days, with 48-hour rush options when schedules demand it.",
    icon: Timer,
  },
  {
    title: "Local expertise",
    text: "Deep familiarity with county clerk records, zoning boards and recording offices across Central Texas since 1998.",
    icon: HeartHandshake,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their staking crews have never missed a deadline in six years of working together. Footings, setbacks, grading — always exactly where the plans say they should be.",
    name: "Mike Thompson",
    role: "General Contractor, BuildRight Construction",
    initials: "MT",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    quote:
      "Meridian’s ALTA surveys are the most thorough I’ve reviewed in twenty years of practice. Title issues get resolved before closing, not after.",
    name: "Laura Bennett",
    role: "Real Estate Attorney, Pinnacle Legal Group",
    initials: "LB",
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    quote:
      "From due diligence to final plat recording, their team guided our 40-lot subdivision through every approval without a single delay.",
    name: "David Okafor",
    role: "Developer, Harborview Development",
    initials: "DO",
    gradient: "from-lime-500 to-green-500",
  },
  {
    quote:
      "I needed a boundary survey before building a fence. Fast, friendly, fairly priced — and the plat was accepted by the county on the first try.",
    name: "Sarah Nguyen",
    role: "Homeowner, Travis County",
    initials: "SN",
    gradient: "from-amber-500 to-orange-400",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  gradient: string;
};

export const team: TeamMember[] = [
  { name: "Robert Hayes, P.L.S.", role: "Founder & Principal Surveyor", initials: "RH", gradient: "from-emerald-600 to-teal-600" },
  { name: "James Whitfield, P.L.S.", role: "Chief of Survey Operations", initials: "JW", gradient: "from-teal-500 to-green-500" },
  { name: "Elena Torres, GISP", role: "GIS & Mapping Director", initials: "ET", gradient: "from-cyan-500 to-teal-500" },
  { name: "Marcus Reed, P.E.", role: "Civil Liaison & Project Manager", initials: "MR", gradient: "from-amber-500 to-orange-500" },
];

export const milestones = [
  {
    year: "1998",
    title: "One truck, one total station",
    text: "Robert Hayes founds Meridian in Austin with a used instrument, a pickup truck and a stubborn commitment to precision.",
  },
  {
    year: "2005",
    title: "Going digital",
    text: "Robotic total stations and GPS replace tape measures in the field; the first CAD drafting station comes online.",
  },
  {
    year: "2012",
    title: "Eyes in the sky",
    text: "We launch one of the region’s first UAV photogrammetry programs for large-scale topographic mapping.",
  },
  {
    year: "2018",
    title: "The GIS division",
    text: "A dedicated mapping department opens its doors as Meridian completes its 5,000th parcel survey.",
  },
  {
    year: "2026",
    title: "12,000 parcels strong",
    text: "Nearly three decades in, our crews serve 40+ counties across Texas from two full-time offices.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    text: "Tell us about your property and goals. You’ll receive a transparent, fixed-price quote within one business day.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Research & Fieldwork",
    text: "We pull deeds, plats and county records, then capture precise measurements with GNSS and robotic instruments.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Analyze & Draft",
    text: "Our office team reconciles field data against the written record and drafts your certified plat.",
    icon: DraftingCompass,
  },
  {
    number: "04",
    title: "Deliver & Record",
    text: "Receive signed, sealed PDFs and mylars ready for lenders, courts or county recording.",
    icon: FileCheck2,
  },
];

export const faqs = [
  {
    question: "How much does a boundary survey cost?",
    answer:
      "It depends on parcel size, terrain, vegetation and how messy the historical records are. Typical residential surveys run $450–$900. After a quick review of your property, we’ll give you a fixed-price quote — it never changes unless the scope does.",
  },
  {
    question: "How long will my survey take?",
    answer:
      "Most residential boundary surveys are delivered in 3–5 business days. ALTA and topographic projects typically take 2–4 weeks depending on acreage. If you’re up against a closing or construction deadline, ask about our 48-hour rush option.",
  },
  {
    question: "Do I really need a survey before buying land?",
    answer:
      "We strongly recommend it. A current survey reveals encroachments, easements and record discrepancies before they become your problem — and most lenders and attorneys will require an ALTA survey on commercial purchases anyway.",
  },
  {
    question: "What’s the difference between a deed and a plat?",
    answer:
      "A deed describes ownership in words; a plat shows the measured reality on paper. Deeds frequently contain conflicting calls, gaps and overlaps that only a professional measurement can resolve — which is exactly what we do.",
  },
  {
    question: "Will my county or lender accept your survey?",
    answer:
      "Yes. Every deliverable is signed and sealed by a state-licensed Professional Land Surveyor and meets Texas Board standards — plus ALTA/NSPS requirements where applicable. If any reviewer requests a revision, we handle it at no charge.",
  },
];

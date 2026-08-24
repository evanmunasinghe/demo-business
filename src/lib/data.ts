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
  ScrollText,
  Timer,
  Trees,
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
  name: "DEMO",
  fullName: "DEMO Land Surveying (Pvt) Ltd",
  tagline: "Precise Surveys. Confident Decisions.",
  description:
    "DEMO Land Surveying is a Sri Lankan firm of Licensed Surveyors providing boundary surveys, bank loan surveys, topographic mapping, setting-out, subdivision plans and Bim Saviya title surveys island-wide.",
  phoneDisplay: "+94 77 258 7788",
  phoneHref: "tel:+94772587788",
  whatsapp:
    "https://wa.me/94772587788?text=Hi%20DEMO!%20I%E2%80%99d%20like%20a%20quote%20for%20a%20land%20survey.",
  email: "surveys@demolandsurveying.lk",
  address: "No. 128, Havelock Road, Colombo 05, Sri Lanka",
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday & Poya", time: "Closed" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Havelock+Road,+Colombo+05,+Sri+Lanka&z=15&output=embed",
  mapsLink: "https://maps.google.com/?q=Havelock+Road,+Colombo+05,+Sri+Lanka",
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
    title: "Boundary & Demarcation Surveys",
    short:
      "Legally defensible boundary determination for owners, buyers and banks — beacons demarcated on the ground, not just on paper.",
    long: "Whether you’re settling a fence line in Battaramulla, planning an extension or buying your first block, we fix boundaries per the deed and prior plans to Survey Department standards. Beacons are demarcated on site and every plan is signed and sealed by a Licensed Surveyor.",
    features: [
      "Boundary beacon demarcation",
      "Fence & encroachment resolution",
      "Old plan re-surveys & corrections",
      "Building line verification",
    ],
    icon: Scale,
  },
  {
    slug: "bank-loan-surveys",
    title: "Bank Loan & Valuation Surveys",
    short:
      "The fresh survey plans required by every Sri Lankan bank before releasing a loan against property.",
    long: "All leading banks require a current plan by a Licensed Surveyor before sanctioning a mortgage or loan. We coordinate directly with branch credit officers and panel valuers, so a tight sanction deadline never becomes the reason your deal falls through.",
    features: [
      "Mortgage & re-survey plans",
      "Coordination with bank credit teams",
      "Valuation-ready deliverables",
      "Fast-track sanction deadlines",
    ],
    icon: FileCheck2,
  },
  {
    slug: "topographic-surveys",
    title: "Topographic & Contour Surveys",
    short:
      "Ground truth for architects and engineers designing on Sri Lankan terrain — flat Colombo lots to hillside sites in Kandy.",
    long: "Bare-earth contours, spot levels, drainage, trees and existing structures captured with drone photogrammetry and ground instruments — delivered in CAD and PDF formats your design team can use the same day they receive them.",
    features: [
      "Contour & spot-level surveys",
      "Utility & drainage mapping",
      "Drone photogrammetry (UAV)",
      "CAD & PDF deliverables",
    ],
    icon: Mountain,
  },
  {
    slug: "setting-out",
    title: "Building Setting-Out & Construction Surveys",
    short:
      "Your crew builds exactly where the council-approved plan says — the first time, every time.",
    long: "From pile positions to finished floor levels, our field crews set out buildings per council-approved plans — including the building-line offsets required by municipal councils and pradeshiya sabhas. Same-day revisions when designs change mid-build.",
    features: [
      "Setting-out per approved plans",
      "Building line & offset marking",
      "Floor level benchmarks",
      "As-built certificates",
    ],
    icon: HardHat,
  },
  {
    slug: "subdivision-plans",
    title: "Subdivision & Amalgamation Plans",
    short:
      "Split family land or combine adjoining lots legally — from first sketch to final approved plan.",
    long: "We prepare subdivision and amalgamation plans to survey standards, then guide them through local authority approval and Land Registry filing end-to-end — including road reservations, access widths and council-specific requirements.",
    features: [
      "Subdivision & amalgamation plans",
      "Local authority approval support",
      "Road & reserve reservations",
      "Land Registry filing coordination",
    ],
    icon: LayoutGrid,
  },
  {
    slug: "bim-saviya-title-surveys",
    title: "Bim Saviya Title Surveys",
    short:
      "Cadastral surveys for title registration under the Title Registration Act No. 21 of 1998.",
    long: "As Sri Lanka transitions from document registration to conclusive title under Bim Saviya, our cadastral teams prepare first-title plans and parcel fabric maps for private holdings and state land alike — coordinated with divisional secretariats and the Survey Department.",
    features: [
      "First title (cadastral) surveys",
      "Parcel fabric mapping",
      "Notary & attorney coordination",
      "Survey Department submissions",
    ],
    icon: ScrollText,
  },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Plans Delivered" },
  { value: 25, suffix: "+", label: "Years of Service" },
  { value: 25, suffix: "", label: "Districts Covered" },
  { value: 99, suffix: "%", label: "First-Pass Approval" },
];

export type Brand = { name: string; icon: LucideIcon };

export const brands: Brand[] = [
  { name: "Lanka Land Titles", icon: Landmark },
  { name: "Serendib Constructions", icon: HardHat },
  { name: "Galle Face Developers", icon: Building2 },
  { name: "Kandy Realty", icon: Hexagon },
  { name: "Ceylon Engineering", icon: Command },
  { name: "Lotus Homes (Pvt) Ltd", icon: Trees },
  { name: "Sigiriya Holdings", icon: Layers },
  { name: "Mercantile Legal", icon: Aperture },
];

export const whyChoose = [
  {
    title: "Licensed by the Surveyor-General",
    text: "Every plan is signed and sealed by a Licensed Surveyor registered with the Survey Department of Sri Lanka and the Institute of Surveyors.",
    icon: Landmark,
  },
  {
    title: "Cutting-edge technology",
    text: "GNSS receivers, robotic total stations and FAA-licensed drone photogrammetry deliver millimetre-level accuracy in any terrain.",
    icon: Satellite,
  },
  {
    title: "Fast turnaround",
    text: "Most surveys are delivered in 3–5 working days, with 48-hour rush options when bank sanction deadlines demand it.",
    icon: Timer,
  },
  {
    title: "Island-wide expertise",
    text: "From Point Pedro to Dondra Head, our teams know the Land Registries, divisional secretariats and local authorities in all 25 districts.",
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
      "Their setting-out crews have never missed a deadline in six years of working together. Foundations go in exactly where the council-approved plans say they should.",
    name: "Nimal Perera",
    role: "Project Manager, Serendib Constructions",
    initials: "NP",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    quote:
      "DEMO’s plans are the most thorough I’ve seen in twenty years of conveyancing. Title issues get resolved before the deed is signed, not after.",
    name: "Priyantha Fernando",
    role: "Notary Public & Attorney-at-Law, Colombo",
    initials: "PF",
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    quote:
      "From due diligence to the final approved subdivision plan, their team guided our 40-lot scheme through every clearance without a single delay.",
    name: "Kumari Jayasinghe",
    role: "Director, Kandy Highlands (Pvt) Ltd",
    initials: "KJ",
    gradient: "from-lime-500 to-green-500",
  },
  {
    quote:
      "I needed a survey before building my boundary wall. Fast, friendly, fairly priced — and the plan was accepted by my bank on the first try.",
    name: "Ruwan Dias",
    role: "Homeowner, Battaramulla",
    initials: "RD",
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
  { name: "A.B. Jayawardena", role: "Founder & Senior Licensed Surveyor", initials: "AJ", gradient: "from-emerald-600 to-teal-600" },
  { name: "M. Shanmuganathan", role: "Chief Surveyor", initials: "MS", gradient: "from-teal-500 to-green-500" },
  { name: "Dilini Rathnayake", role: "GIS & Mapping Lead", initials: "DR", gradient: "from-cyan-500 to-teal-500" },
  { name: "Suresh Kannangara", role: "Head of Field Operations", initials: "SK", gradient: "from-amber-500 to-orange-500" },
];

export const milestones = [
  {
    year: "1998",
    title: "One theodolite, one dream",
    text: "A.B. Jayawardena founds DEMO in Colombo with a secondhand theodolite and a stubborn commitment to precision.",
  },
  {
    year: "2005",
    title: "Going digital",
    text: "Robotic total stations and GPS replace the chain and tape in the field; the first CAD drafting station comes online.",
  },
  {
    year: "2012",
    title: "Eyes in the sky",
    text: "We launch one of Sri Lanka’s first commercial UAV photogrammetry programs for large-scale topographic mapping.",
  },
  {
    year: "2018",
    title: "The GIS division",
    text: "A dedicated mapping department opens as DEMO delivers its 5,000th survey plan.",
  },
  {
    year: "2026",
    title: "Island-wide & 12,000 plans strong",
    text: "Nearly three decades in, our crews cover all 25 districts from offices in Colombo and Kandy.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    text: "Tell us about your land and goals. You’ll receive a transparent, fixed-price quote within one working day.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Research & Fieldwork",
    text: "We pull deeds, prior plans and Land Registry records, then capture measurements with GNSS and robotic total stations.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Analyze & Draft",
    text: "Our office team reconciles field data against the written record and drafts your certified survey plan.",
    icon: DraftingCompass,
  },
  {
    number: "04",
    title: "Deliver & File",
    text: "Receive signed plans ready for your bank, notary or local authority — with Land Registry filing handled for you.",
    icon: FileCheck2,
  },
];

export const faqs = [
  {
    question: "How much does a boundary survey cost in Sri Lanka?",
    answer:
      "It depends on the extent of your land (in perches), terrain, vegetation, travel distance and how old the prior plans are. Typical residential blocks of 10–20 perches in the Western Province run around Rs. 15,000–40,000 all-in. After checking your deed and preliminary plan, we’ll give you a fixed-price quote — it never changes unless the scope does.",
  },
  {
    question: "How long will my survey take?",
    answer:
      "Most residential surveys are delivered within 3–5 working days of the field visit. Larger schemes, topographic projects and Bim Saviya title surveys typically take 2–4 weeks. Facing a bank sanction or deed-signing deadline? Ask about our 48-hour rush option.",
  },
  {
    question: "Do I really need a survey before buying land?",
    answer:
      "We strongly recommend it. A current survey confirms the land matches the preliminary plan in the deed, reveals encroachments and overlaps with adjoining plans, and catches gaps that could cost you lakhs later. Every bank will also require a fresh Licensed Surveyor’s plan before approving any loan against the property.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "Just bring the original deed (or an attested copy), the previous survey plan number mentioned in the deed if you have it, and your NIC. We handle the Land Registry searches, prior-plan tracing and everything else ourselves.",
  },
  {
    question: "Will my plan be accepted by the bank, Land Registry or council?",
    answer:
      "Yes. Every plan is signed and sealed by a Licensed Surveyor appointed under the Surveyors Act, making it acceptable to Land Registries, banks, municipal councils and pradeshiya sabhas island-wide. We also handle Bim Saviya title registration submissions — and if any reviewer requests a revision, we do it at no charge.",
  },
];

import type { Member, Mentor, Partner, Startup } from "./types";

export const MOCK_MEMBERS: Member[] = [
  { id: "m1", name: "Camille Laurent", company: "Plouf Studio", role: "Founder", vertical: "climate" },
  { id: "m2", name: "Søren Madsen", company: "Nordic VC", role: "Partner", vertical: "fintech" },
  { id: "m3", name: "Inès Roche", company: "Ovrsea", role: "Country Lead DK", vertical: "deeptech" },
  { id: "m4", name: "Mette Olsen", company: "Tradeshift", role: "Head of Product", vertical: "fintech" },
  { id: "m5", name: "Antoine Dupont", company: "Doctolib", role: "Engineering Lead", vertical: "health" },
  { id: "m6", name: "Lærke Jensen", company: "Trustpilot", role: "Talent Partner", vertical: "other" },
];

export const MOCK_STARTUPS: Startup[] = [
  {
    id: "s1",
    name: "Verkor",
    oneLiner: "Low-carbon battery gigafactory.",
    vertical: "climate",
    stage: "growth",
    websiteUrl: "https://verkor.com",
    presence: ["FR", "DK"],
    featured: true,
  },
  {
    id: "s2",
    name: "Pennylane",
    oneLiner: "Accounting & finance platform for SMEs.",
    vertical: "fintech",
    stage: "series-b+",
    websiteUrl: "https://pennylane.com",
    presence: ["FR"],
    featured: true,
  },
  {
    id: "s3",
    name: "Owkin",
    oneLiner: "AI for medical research.",
    vertical: "health",
    stage: "growth",
    websiteUrl: "https://owkin.com",
    presence: ["FR", "DK"],
    featured: true,
  },
  {
    id: "s4",
    name: "Mirakl",
    oneLiner: "Marketplace platform for enterprise.",
    vertical: "other",
    stage: "growth",
    websiteUrl: "https://mirakl.com",
    presence: ["FR"],
  },
];

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "me1",
    name: "Élise Bernard",
    expertise: ["Fundraising", "Series A", "B2B SaaS"],
    bio: "10+ years scaling French SaaS in the Nordics.",
  },
  {
    id: "me2",
    name: "Jonas Holm",
    expertise: ["Climate tech", "Hardware", "Manufacturing"],
    bio: "Operator turned advisor, ex-Vestas.",
  },
];

export const MOCK_PARTNERS: Partner[] = [
  { id: "p1", name: "French Embassy in Denmark", tier: "institutional", category: "Government", order: 1 },
  { id: "p2", name: "Business France", tier: "institutional", category: "Trade & Investment", order: 2 },
  { id: "p3", name: "CCI France Danemark", tier: "institutional", category: "Chamber of Commerce", order: 3 },
  { id: "p4", name: "Copenhagen Capacity", tier: "ecosystem", category: "Investment promotion", order: 4 },
  { id: "p5", name: "BNP Paribas", tier: "corporate", category: "Banking", order: 5 },
  { id: "p6", name: "Capgemini", tier: "corporate", category: "Consulting", order: 6 },
];

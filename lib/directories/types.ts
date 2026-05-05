export type Vertical = "climate" | "fintech" | "health" | "deeptech" | "other";

export type Member = {
  id: string;
  name: string;
  company?: string;
  role?: string;
  linkedinUrl?: string;
  photoUrl?: string;
  vertical?: Vertical;
};

export type Startup = {
  id: string;
  name: string;
  oneLiner: string;
  vertical: Vertical;
  stage?: "pre-seed" | "seed" | "series-a" | "series-b+" | "growth";
  websiteUrl?: string;
  logoUrl?: string;
  presence: ("FR" | "DK")[];
  featured?: boolean;
};

export type Mentor = {
  id: string;
  name: string;
  expertise: string[];
  linkedinUrl?: string;
  photoUrl?: string;
  bio?: string;
};

export type Partner = {
  id: string;
  name: string;
  tier: "institutional" | "corporate" | "ecosystem";
  websiteUrl?: string;
  logoUrl?: string;
  category?: string;
  order?: number;
};

import { fetchAirtable } from "./airtable";
import { MOCK_MENTORS } from "./mock";
import type { Mentor } from "./types";

type Fields = {
  Name?: string;
  Expertise?: string[];
  LinkedIn?: string;
  Photo?: { url: string }[];
  Bio?: string;
  OptInPublic?: boolean;
};

export async function getMentors(): Promise<Mentor[]> {
  const records = await fetchAirtable<Fields>({
    table: "Mentors",
    filterByFormula: "{OptInPublic} = TRUE()",
  });
  if (!records) return MOCK_MENTORS;

  return records.map((r) => ({
    id: r.id,
    name: r.fields.Name ?? "",
    expertise: r.fields.Expertise ?? [],
    linkedinUrl: r.fields.LinkedIn,
    photoUrl: r.fields.Photo?.[0]?.url,
    bio: r.fields.Bio,
  }));
}

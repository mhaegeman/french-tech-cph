import { fetchAirtable } from "./airtable";
import { MOCK_MEMBERS } from "./mock";
import type { Member, Vertical } from "./types";

type Fields = {
  Name?: string;
  Company?: string;
  Role?: string;
  LinkedIn?: string;
  Photo?: { url: string }[];
  Vertical?: string;
  OptInPublic?: boolean;
};

export async function getMembers(): Promise<Member[]> {
  const records = await fetchAirtable<Fields>({
    table: "Members",
    filterByFormula: "{OptInPublic} = TRUE()",
  });
  if (!records) return MOCK_MEMBERS;

  return records.map((r) => ({
    id: r.id,
    name: r.fields.Name ?? "",
    company: r.fields.Company,
    role: r.fields.Role,
    linkedinUrl: r.fields.LinkedIn,
    photoUrl: r.fields.Photo?.[0]?.url,
    vertical: (r.fields.Vertical as Vertical | undefined) ?? undefined,
  }));
}

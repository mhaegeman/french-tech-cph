import { fetchAirtable } from "./airtable";
import { MOCK_STARTUPS } from "./mock";
import type { Startup, Vertical } from "./types";

type Fields = {
  Name?: string;
  OneLiner?: string;
  Vertical?: string;
  Stage?: string;
  Website?: string;
  Logo?: { url: string }[];
  Presence?: string[];
  Featured?: boolean;
};

export async function getStartups(opts?: {
  featuredOnly?: boolean;
}): Promise<Startup[]> {
  const records = await fetchAirtable<Fields>({
    table: "Startups",
    filterByFormula: opts?.featuredOnly ? "{Featured} = TRUE()" : undefined,
  });
  const all = records
    ? records.map((r) => ({
        id: r.id,
        name: r.fields.Name ?? "",
        oneLiner: r.fields.OneLiner ?? "",
        vertical: (r.fields.Vertical as Vertical | undefined) ?? "other",
        stage: r.fields.Stage as Startup["stage"],
        websiteUrl: r.fields.Website,
        logoUrl: r.fields.Logo?.[0]?.url,
        presence: (r.fields.Presence ?? []) as Startup["presence"],
        featured: r.fields.Featured,
      }))
    : MOCK_STARTUPS;

  return opts?.featuredOnly ? all.filter((s) => s.featured) : all;
}

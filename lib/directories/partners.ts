import { fetchAirtable } from "./airtable";
import { MOCK_PARTNERS } from "./mock";
import type { Partner } from "./types";

type Fields = {
  Name?: string;
  Tier?: Partner["tier"];
  Website?: string;
  Logo?: { url: string }[];
  Category?: string;
  Order?: number;
};

export async function getPartners(): Promise<Partner[]> {
  const records = await fetchAirtable<Fields>({ table: "Partners" });
  const all = records
    ? records.map((r) => ({
        id: r.id,
        name: r.fields.Name ?? "",
        tier: r.fields.Tier ?? "ecosystem",
        websiteUrl: r.fields.Website,
        logoUrl: r.fields.Logo?.[0]?.url,
        category: r.fields.Category,
        order: r.fields.Order,
      }))
    : MOCK_PARTNERS;

  return [...all].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

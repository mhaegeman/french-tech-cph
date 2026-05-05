/**
 * Thin Airtable REST client. Returns `null` when env vars are missing so
 * callers can fall back to mock data. Records are filtered server-side via
 * `optInPublic = TRUE()` formula where applicable.
 */

const AIRTABLE_API = "https://api.airtable.com/v0";

type AirtableRecord<T> = { id: string; fields: T };

export type AirtableQuery = {
  table: string;
  view?: string;
  filterByFormula?: string;
  pageSize?: number;
};

export async function fetchAirtable<TFields extends Record<string, unknown>>(
  query: AirtableQuery,
): Promise<AirtableRecord<TFields>[] | null> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!apiKey || !baseId) return null;

  const params = new URLSearchParams();
  if (query.view) params.set("view", query.view);
  if (query.filterByFormula)
    params.set("filterByFormula", query.filterByFormula);
  if (query.pageSize) params.set("pageSize", String(query.pageSize));

  const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(query.table)}?${params}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 3600, tags: [`airtable:${query.table}`] },
  });
  if (!res.ok) {
    console.error(`Airtable ${query.table} failed: ${res.status}`);
    return null;
  }
  const json = (await res.json()) as { records: AirtableRecord<TFields>[] };
  return json.records;
}

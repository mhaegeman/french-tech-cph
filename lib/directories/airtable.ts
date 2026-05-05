/**
 * Thin Airtable REST client. Returns `null` ONLY when env vars are missing
 * (the documented "use mock data" path). Any HTTP error when Airtable IS
 * configured throws — we don't want a transient outage or bad token to
 * silently publish placeholder content as if it were real data.
 *
 * Walks Airtable's `offset` cursor so tables larger than one page (100
 * records) return all records.
 */

const AIRTABLE_API = "https://api.airtable.com/v0";

type AirtableRecord<T> = { id: string; fields: T };

type AirtableListResponse<T> = {
  records: AirtableRecord<T>[];
  offset?: string;
};

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

  const all: AirtableRecord<TFields>[] = [];
  let offset: string | undefined;

  do {
    const params = new URLSearchParams();
    if (query.view) params.set("view", query.view);
    if (query.filterByFormula)
      params.set("filterByFormula", query.filterByFormula);
    if (query.pageSize) params.set("pageSize", String(query.pageSize));
    if (offset) params.set("offset", offset);

    const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(query.table)}?${params}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 3600, tags: [`airtable:${query.table}`] },
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `Airtable ${query.table} request failed: ${res.status} ${res.statusText} ${body}`,
      );
    }
    const json = (await res.json()) as AirtableListResponse<TFields>;
    all.push(...json.records);
    offset = json.offset;
  } while (offset);

  return all;
}

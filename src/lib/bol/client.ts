import "server-only";

import { getBolAccessToken } from "./auth";
import { BOL_CATALOG_BASE } from "./config";
import type { BolApiErrorBody } from "./types";

export async function bolCatalogFetch<T>(
  path: string,
  options: {
    revalidate?: number;
    searchParams?: Record<string, string | undefined>;
    acceptLanguage?: string;
  } = {}
): Promise<T | null> {
  const token = await getBolAccessToken();
  if (!token) return null;

  const url = new URL(`${BOL_CATALOG_BASE}${path}`);
  if (options.searchParams) {
    for (const [key, value] of Object.entries(options.searchParams)) {
      if (value != null) url.searchParams.set(key, value);
    }
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Accept-Language": options.acceptLanguage ?? "nl",
      },
      next: options.revalidate ? { revalidate: options.revalidate } : undefined,
    });

    if (response.status === 404) return null;

    if (response.status === 429) {
      console.warn("[bol] Rate limit bereikt voor", path);
      return null;
    }

    if (!response.ok) {
      let detail = response.statusText;
      try {
        const body = (await response.json()) as BolApiErrorBody;
        detail = body.detail ?? body.title ?? detail;
      } catch {
        // ignore JSON parse errors
      }
      console.error("[bol] API error", response.status, path, detail);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("[bol] Request failed", path, error);
    return null;
  }
}

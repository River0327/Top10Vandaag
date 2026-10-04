import "server-only";

import type { BolTokenResponse } from "./types";
import { BOL_TOKEN_URL } from "./config";

let cachedToken: { token: string; expiresAt: number } | null = null;

function getBolCredentials(): { clientId: string; clientSecret: string } | null {
  const clientId = process.env.BOL_CLIENT_ID?.trim();
  const clientSecret = process.env.BOL_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) return null;
  return { clientId, clientSecret };
}

export async function getBolAccessToken(): Promise<string | null> {
  const credentials = getBolCredentials();
  if (!credentials) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[bol] BOL_CLIENT_ID / BOL_CLIENT_SECRET ontbreken. Bol-data wordt overgeslagen."
      );
    }
    return null;
  }

  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const encoded = Buffer.from(
    `${credentials.clientId}:${credentials.clientSecret}`
  ).toString("base64");

  const response = await fetch(BOL_TOKEN_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${encoded}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("[bol] Token request failed:", response.status);
    return null;
  }

  const data = (await response.json()) as BolTokenResponse;
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };

  return data.access_token;
}

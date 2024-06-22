import { env } from "@/config/env";

const getBaseUrl = (baseUrl: string, path?: string) => {
  if (path && !path.startsWith("/")) {
    path = `/${path}`;
  }

  return `${baseUrl}${path ?? ""}`;
};

export const getApiUrl = (path?: string) => {
  return getBaseUrl(env.NEXT_PUBLIC_API_URL, path);
};

export const getAppUrl = (path?: string) => {
  return getBaseUrl(env.NEXT_PUBLIC_APP_URL, path);
};

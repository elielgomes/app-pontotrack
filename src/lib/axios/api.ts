import axios from "axios";
import { getCookie } from "cookies-next";
import { env } from "@/config/env";

const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    let token;
    if (typeof window === "undefined") {
      token = getCookie("app-track", {
        cookies: (await import("next/headers")).cookies,
      });
    } else {
      token = getCookie("app-track");
    }

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };

import { api } from "@/lib/axios/api";
import type { LoginInput, LoginOutput } from "@/services/auth/types/";

export const auth = {
  login: async (param: LoginInput) => {
    const response = await api.post<LoginOutput>("/auth/login", param);
    return response.data;
  },
};

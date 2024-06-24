import { api } from "@/lib/axios/api";
import type {
  LoginInput,
  LoginOutput,
  RegisterInput,
  RegisterOutput,
} from "@/services/auth/types/";

export const auth = {
  login: async ({ email, password }: LoginInput) => {
    const response = await api.post<LoginOutput>("/auth/login", {
      email,
      password,
    });
    return response.data;
  },
  register: async ({ email, name, password }: RegisterInput) => {
    const response = await api.post<RegisterOutput>("/auth/register", {
      email,
      name,
      password,
    });
    return response.data;
  },
};

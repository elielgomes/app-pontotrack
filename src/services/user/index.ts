import { api } from "@/lib/axios/api";
import type {
  RegisterInput,
  RegisterOutput,
  User,
} from "@/services/user/types/";

export const user = {
  me: async () => {
    try {
      const response = await api.get<Omit<User, "password">>("/user/me");
      return response.data;
    } catch (error) {
      return undefined;
    }
  },
  register: async ({ email, name, password }: RegisterInput) => {
    const response = await api.post<RegisterOutput>("/user", {
      email,
      name,
      password,
    });
    return response.data;
  },
  updatePassword: async ({
    password,
    newPassword,
  }: {
    password: string;
    newPassword: string;
  }) => {
    await api.patch("/user/password", {
      password: password,
      newPassword: newPassword,
    });
    return true;
  },
};

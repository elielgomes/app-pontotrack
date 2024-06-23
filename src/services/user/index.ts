import { api } from "@/lib/axios/api";
import type { User } from "@/services/user/types/";

export const user = {
  me: async () => {
    try {
      const response = await api.get<Omit<User, "password">>("/user/me");
      return response.data;
    } catch (error) {
      return undefined;
    }
  },
};

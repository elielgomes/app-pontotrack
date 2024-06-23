import { CredentialsSchema } from "@/schemas/credentials";
import { auth } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { createContext } from "react";
import { toast } from "sonner";
import { userKeys } from "@/query/query-key";

export interface AuthContextData {
  isPending: boolean;
  login: ({ email, password }: CredentialsSchema) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: auth.login,
    onSuccess: ({ access_token }) => {
      setCookie("app-track", access_token, {
        maxAge: 60 * 60 * 24,
      });
      queryClient.invalidateQueries({ queryKey: userKeys.me });
      toast.success("Login feito com sucesso!");
      router.replace("/dashboard");
    },
    onError: () => {
      toast.error("Erro ao fazer login");
    },
  });

  const login = ({ email, password }: CredentialsSchema) => {
    mutate({ email, password });
  };

  const logout = () => {
    queryClient.clear();
    deleteCookie("app-track");
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isPending,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

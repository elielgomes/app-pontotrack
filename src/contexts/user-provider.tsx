"use client";

import { user as userService } from "@/services/user";
import { User } from "@/services/user/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { createContext } from "react";
import { toast } from "sonner";
import { userKeys } from "@/factories/query-keys";

export interface UserContextData {
  isLoading: boolean;
  user: Omit<User, "password"> | undefined;
}

export const UserContext = createContext<UserContextData | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    isLoading,
    data: user,
    error,
  } = useSuspenseQuery({
    queryKey: userKeys.me,
    queryFn: userService.me,
    refetchOnWindowFocus: false,
  });

  if (error) {
    toast.error("Erro ao buscar usuário");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

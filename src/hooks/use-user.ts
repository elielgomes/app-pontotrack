"use client";

import { UserContext, UserContextData } from "@/contexts/user-provider";
import { useContext } from "react";

export const useUser = (): UserContextData => {
  const context = useContext(UserContext);

  if (!context) {
    console.error("Error: useUser must be used within an UserProvider");
    return {
      isLoading: false,
      user: undefined,
    };
  }
  return context;
};

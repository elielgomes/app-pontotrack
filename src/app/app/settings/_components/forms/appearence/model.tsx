"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	appearanceFormSchema,
	type AppearanceFormSchema,
} from "@/schemas/appearance-form";
import { useTheme } from "next-themes";
import { toast } from "sonner";

type Theme = "light" | "dark";

export const useAppearanceForm = () => {
  const defaultTheme = localStorage.getItem("apptrack-theme") as Theme | null;
  const { setTheme } = useTheme();

  const form = useForm<AppearanceFormSchema>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: defaultTheme || "light",
    },
  });

  const onSubmit = (data: AppearanceFormSchema) => {
    setTheme(data.theme);
    toast.success("Tema salvo com sucesso!");
  };

  return {
    form,
    onSubmit,
  };
};

export type AppearanceFormModel = ReturnType<typeof useAppearanceForm>;

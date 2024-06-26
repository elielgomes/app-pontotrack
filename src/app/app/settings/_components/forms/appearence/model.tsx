"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { appearanceFormSchema } from "@/schemas/appearance-form";
import { useTheme } from "next-themes";
import { toast } from "sonner";

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;
type Theme = "light" | "dark";

export const useAppearanceForm = () => {
  const defaultTheme = localStorage.getItem("apptrack-theme") as Theme | null;
  const { setTheme } = useTheme();

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: defaultTheme || "light",
    },
  });

  const onSubmit = (data: AppearanceFormValues) => {
    setTheme(data.theme);
    toast.success("Tema salvo com sucesso!");
  };

  return {
    form,
    onSubmit,
  };
};

"use client";

import { type z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { auth } from "@/services/auth";
import { credentialsSchema } from "@/schemas/credentials";

export const useFormLogin = () => {
  const router = useRouter();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: auth.login,
    onSuccess: ({ access_token }) => {
      setCookie("app-track", access_token, {
        maxAge: 60 * 60 * 24,
      });
      toast.success("Login feito com sucesso!");
      router.replace("/dashboard");
    },
  });

  const onSubmit = async (values: z.infer<typeof credentialsSchema>) => {
    try {
      mutate({ email: values.email, password: values.password });
    } catch (error) {
      toast.error("Ops... Algo deu errado!", {
        description: "Se o erro persistir fale com o suporte.",
      });
    }
  };

  return {
    form,
    isVisiblePassword,
    setIsVisiblePassword,
    isPending,
    onSubmit,
  };
};

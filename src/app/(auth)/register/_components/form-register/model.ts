"use client";

import { type z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { auth } from "@/services/auth";
import { routesMap } from "@/constants/routes-map";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "@/schemas/user-register";

export const useFormRegister = () => {
  const router = useRouter();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<z.infer<typeof userRegisterSchema>>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: auth.register,
    onSuccess: () => {
      toast.success("Cadastro realizado com sucesso!");
      router.push(routesMap.dashboard);
    },
    onError: () => {
      toast.error("Erro ao fazer login");
    },
  });

  const onSubmit = async (values: z.infer<typeof userRegisterSchema>) => {
    mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return {
    form,
    isVisiblePassword,
    isPending,
    onSubmit,
    setIsVisiblePassword,
  };
};

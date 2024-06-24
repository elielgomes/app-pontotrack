import { z } from "zod";

export const userRegisterSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Preencha com seu nome completo",
    })
    .max(100, {
      message: "O nome deve ter no máximo 100 caracteres",
    }),
  email: z
    .string()
    .email({
      message: "Preencha com um e-mail válido",
    })
    .max(100, {
      message: "O e-mail deve ter no máximo 100 caracteres",
    }),
  password: z
    .string()
    .min(6, {
      message: "A senha deve ter no mínimo 6 caracteres",
    })
    .max(20, {
      message: "A senha deve ter no máximo 20 caracteres",
    }),
});

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;

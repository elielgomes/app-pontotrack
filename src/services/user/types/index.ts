import { UserRegisterSchema } from "@/schemas/user-register";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterInput extends UserRegisterSchema {}
export interface RegisterOutput {
  user: Omit<User, "password">;
}

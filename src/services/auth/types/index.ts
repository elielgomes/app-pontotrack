import { CredentialsSchema } from "@/schemas/credentials";
import { UserRegisterSchema } from "@/schemas/user-register";
import { User } from "@/services/user/types";

export interface LoginInput extends CredentialsSchema {}
export interface LoginOutput {
  access_token: string;
  user: Omit<User, "password">;
}

export interface RegisterInput extends UserRegisterSchema {}
export interface RegisterOutput {
  user: Omit<User, "password">;
}

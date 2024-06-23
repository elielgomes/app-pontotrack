import { CredentialsSchema } from "@/schemas/credentials";

export interface LoginInput extends CredentialsSchema {}
export interface LoginOutput {
  access_token: string;
}

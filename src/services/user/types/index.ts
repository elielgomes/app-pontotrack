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

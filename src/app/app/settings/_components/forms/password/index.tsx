"use client";

import React from "react";
import { usePasswordForm } from "@/app/app/settings/_components/forms/password/model";
import { PasswordFormView } from "@/app/app/settings/_components/forms/password/view";

export const PasswordForm: React.FC = () => {
  const model = usePasswordForm();
  return <PasswordFormView {...model} />;
};

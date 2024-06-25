"use client";

import { AccountForm } from "@/app/app/settings/_components/forms/account";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NextPage } from "next";

const SettingsPage: NextPage = () => {
  return (
    <Card className="flex-1">
      <CardHeader className="space-y-6">
        <div>
          <CardTitle className="text-lg">Minha conta</CardTitle>
          <CardDescription>
            Mantenha sempre suas informações pessoais atualizadas
          </CardDescription>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <AccountForm />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;

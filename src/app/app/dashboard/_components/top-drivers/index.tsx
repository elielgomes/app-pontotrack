import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const topDrivers = [
  {
    id: 1,
    name: "João Silva",
    avatar: "https://avatar.iran.liara.run/public/1",
  },
  {
    id: 2,
    name: "Pedro Costa",
    avatar: "https://avatar.iran.liara.run/public/2",
  },
  {
    id: 3,
    name: "Miguel Santos",
    avatar: "https://avatar.iran.liara.run/public/3",
  },
  {
    id: 4,
    name: "Lucas Oliveira",
    avatar: "https://avatar.iran.liara.run/public/4",
  },
  {
    id: 5,
    name: "Gabriel Pereira",
    avatar: "https://avatar.iran.liara.run/public/5",
  },
];

export const TopDrivers: React.FC = () => {
  return (
    <Card className="overflow-hidden flex-1">
      <CardHeader>
        <CardTitle className="text-base">Top motoristas</CardTitle>
        <CardDescription>Última semana</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {topDrivers.map((driver, i) => (
            <div key={driver.id} className="flex items-center gap-4">
              <div className="font-medium">{i + 1}º</div>
              <Avatar className="h-9 w-9 flex">
                <AvatarImage src={driver.avatar} />
                <AvatarFallback className="uppercase">
                  {driver.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none truncate">
                  {driver.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

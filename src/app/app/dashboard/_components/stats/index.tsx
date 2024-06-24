import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  CarFront,
  OctagonAlert,
  Siren,
  FileWarning,
} from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Veículos",
    stat: "17",
    icon: CarFront,
    change: "",
    changeType: "",
  },
  {
    id: 2,
    name: "Infrações",
    stat: "9",
    icon: OctagonAlert,
    change: "5.4%",
    changeType: "decrease",
  },
  {
    id: 3,
    name: "Multas",
    stat: "2",
    icon: FileWarning,
    change: "7%",
    changeType: "decrease",
  },
  {
    id: 4,
    name: "Alertas",
    stat: "7",
    icon: Siren,
    change: "16.3%",
    changeType: "increase",
  },
];

export const Stats: React.FC = () => {
  return (
    <>
      {stats.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-sm">{item.name}</CardTitle>
            <item.icon className="size-4" />
          </CardHeader>
          <CardContent className="flex flex-row justify-between">
            <p className="font-bold text-2xl">{item.stat}</p>
            <p
              data-change-type={item.changeType}
              className="ml-2 flex items-baseline text-sm font-semibold data-[change-type=decrease]:text-red-500 data-[change-type=increase]:text-green-500"
            >
              {item.changeType === "increase" && (
                <ArrowUp
                  className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              )}

              {item.changeType === "decrease" && (
                <ArrowDown
                  className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              )}

              {item.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

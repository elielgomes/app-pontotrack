import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartOccurrences } from "@/app/app/dashboard/_components/bar-chart-occurrences";

export const Occurrences: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ocorrências</CardTitle>
          <CardDescription>Últimos 12 meses</CardDescription>
        </CardHeader>
        <div className="p-6 pt-0 pl-2">
          <BarChartOccurrences />
        </div>
      </Card>
    </>
  );
};

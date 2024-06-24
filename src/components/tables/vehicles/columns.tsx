"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { ActionButton } from "./action-button";

export type Vehicle = {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  status: "Ligado" | "Desligado";
  location: string;
};

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: "licensePlate",
    header: "Placa",
  },
  {
    accessorKey: "make",
    header: "Marca",
  },
  {
    accessorKey: "model",
    header: "Modelo",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (value) => {
      return value.getValue() === "Ligado" ? (
        <Badge
          className="text-green-700 font-bold bg-green-200"
          variant="outline"
        >
          Ligado
        </Badge>
      ) : (
        <Badge className="text-red-700 font-bold bg-red-200" variant="outline">
          Desligado
        </Badge>
      );
    },
  },
  {
    accessorKey: "location",
    header: "Localização",
    cell: (value) => {
      const [lat, long] = (value.getValue() as string).split(", ");
      return (
        <span className="flex gap-2 items-center text-foreground hover:text-primary transition-colors">
          <MapPin className="inline-block w-4 h-4" />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${lat},${long}`}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {value.getValue() as string}
          </a>
        </span>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      return <ActionButton id={row.original.id} />;
    },
  },
];

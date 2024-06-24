import { NextPage } from "next";
import { DataTable } from "@/components/tables/vehicles/table";
import { columns, type Vehicle } from "@/components/tables/vehicles/columns";
import { Card } from "@/components/ui/card";

const data: Vehicle[] = [
  {
    id: "1",
    licensePlate: "BRA1234",
    make: "Chevrolet",
    model: "Onix",
    status: "Ligado",
    location: "40.730610, -73.935242",
  },
  {
    id: "2",
    licensePlate: "BRA5678",
    make: "Volkswagen",
    model: "Gol",
    status: "Desligado",
    location: "40.730610, -73.935242",
  },
  {
    id: "3",
    licensePlate: "BRA9101",
    make: "Fiat",
    model: "Uno",
    status: "Ligado",
    location: "40.730610, -73.935242",
  },
];

const VeiculosPage: NextPage = () => {
  return (
    <Card>
      <DataTable columns={columns} data={data} />
    </Card>
  );
};

export default VeiculosPage;

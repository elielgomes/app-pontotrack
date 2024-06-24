import { CarFront, LayoutDashboard } from "lucide-react";
import { routesMap } from "./routes-map";

export const navLinks = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: routesMap.dashboard,
  },
  {
    icon: CarFront,
    title: "Veículos",
    href: routesMap.veiculos,
  },
] as const;

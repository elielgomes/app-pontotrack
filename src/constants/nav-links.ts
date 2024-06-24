import { CarFront, History, LayoutDashboard } from "lucide-react";
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
  {
    icon: History,
    title: "Histórico",
    href: routesMap.historico,
  },
] as const;

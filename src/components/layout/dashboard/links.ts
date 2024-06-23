import { CarFront, Home, History } from "lucide-react";

export const sidebarLinks = [
  {
    icon: Home,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: CarFront,
    title: "Veículos",
    href: "/dashboard/veiculos",
  },
  {
    icon: History,
    title: "Histórico",
    href: "/dashboard/historico",
  },
] as const;

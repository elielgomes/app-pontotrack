import { CarFront, History, LayoutDashboard } from "lucide-react";

export const navLinks = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: "/app/dashboard",
  },
  {
    icon: CarFront,
    title: "Veículos",
    href: "/app/veiculos",
  },
  {
    icon: History,
    title: "Histórico",
    href: "/app/historico",
  },
] as const;

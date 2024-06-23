"use client";

import React from "react";
import Link from "next/link";
import { Bell } from "lucide-react";

import { MinimalLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useActivePath } from "@/hooks/use-active-path";
import { sidebarLinks } from "@/components/layout/dashboard/links";

export const Sidebar: React.FC = () => {
  const { isActive } = useActivePath();

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <span className="flex items-center gap-2 font-semibold">
          <MinimalLogo className="size-8 rounded-md" />
          <span className="text-lg font-bold">
            App<span className="text-primary">Track</span>
          </span>
        </span>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start pt-2 px-2 text-sm font-medium lg:px-4">
          {sidebarLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              data-active={isActive(item.href)}
              className="data-[active=true]:bg-muted data-[active=true]:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

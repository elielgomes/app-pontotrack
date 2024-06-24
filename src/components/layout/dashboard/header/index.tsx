"use client";

import Link from "next/link";
import { CircleUser, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FullLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useActivePath } from "@/hooks/use-active-path";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants/nav-links";
import { ToggleTheme } from "@/components/toggle-theme";
import { ToggleUserMenu } from "@/components/toggle-user-menu";

export const Header: React.FC = () => {
  const { isActive } = useActivePath();
  return (
    <header className="h-14 border-b bg-muted/40 lg:h-[60px]">
      <div className="container flex justify-between md:justify-end h-14 items-center gap-4 border-b lg:h-[60px]">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium space-y-4">
              <span className="flex items-center gap-2 text-lg font-semibold">
                <FullLogo />
                <span className="sr-only">AppTrack</span>
              </span>
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    data-active={isActive(item.href)}
                    className="data-[active=true]:bg-muted data-[active=true]:text-primary mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex gap-4">
          <ToggleTheme />
          <ToggleUserMenu />
        </div>
      </div>
    </header>
  );
};

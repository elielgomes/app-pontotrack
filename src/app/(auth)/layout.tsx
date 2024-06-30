import React from "react";
import { BackgroundGradientAnimation } from "@/app/(auth)/_components/background-gradient-animation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { routesMap } from "@/constants/routes-map";
import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh w-full bg-background">
      <div className="flex relative min-h-dvh w-full">
        <Button
          asChild
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 z-50"
        >
          <Link href={routesMap.home}>
            <ArrowLeftIcon />
          </Link>
        </Button>
        <BackgroundGradientAnimation containerClassName="absolute lg:w-1/3 lg:static"></BackgroundGradientAnimation>
        <div className="absolute h-dvh w-full bg-transparent lg:w-2/3 lg:bg-background lg:static">
          <div className="flex h-full w-full items-center justify-center px-4 py-8 lg:bg-none">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

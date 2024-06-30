import React from "react";
import { BackgroundGradientAnimation } from "@/app/(auth)/_components/background-gradient-animation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh w-full bg-background">
      <div className="flex relative min-h-dvh w-full">
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

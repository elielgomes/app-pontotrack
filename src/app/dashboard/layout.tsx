import { UserProvider } from "@/contexts/user-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <main className="min-h-dvh w-full bg-background">{children}</main>
    </UserProvider>
  );
}

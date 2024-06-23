export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh w-full bg-background">
      <div className="flex">
        <div className="min-h-dvh bg-primary lg:block lg:w-1/3">
          <div className="flex h-full w-full items-center justify-center"></div>
        </div>
        <div className="min-h-dvh w-full bg-primary lg:w-2/3 lg:bg-background">
          <div className="flex h-full w-full items-center justify-center px-4 py-8 lg:bg-none">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

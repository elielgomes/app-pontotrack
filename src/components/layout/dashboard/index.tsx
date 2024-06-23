import React from "react";
import { cn } from "@/lib/tw-merge";

interface DashboardBaseProps<T> extends React.HTMLAttributes<T> {
  children?: React.ReactNode;
}

/**
 *  @example
 *
 * ```tsx
 * <DashboardRootLayout>
 *		<DashboardSidebarWrapper>
 *			<Sidebar />
 *		</DashboardSidebarWrapper>
 *		<DashboardBodyWrapper>
 *			<Header />
 *			<MainWrapper>
 *				<MainContentHeader>
 *					<MainContentTitle>Dashboard</MainContentTitle>
 *				</MainContentHeader>
 *				<MainContentWrapper>
 *					<div>MEU CONTEUDO</div>
 *				</MainContentWrapper>
 *			</MainWrapper>
 *		</DashboardBodyWrapper>
 *	</DashboardRootLayout>
 *	```
 */
export const DashboardRootLayout: React.FC<
  DashboardBaseProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const DashboardSidebarWrapper: React.FC<
  DashboardBaseProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <aside
      {...props}
      className={cn("hidden border-r bg-muted/40 md:block", className)}
    >
      {children}
    </aside>
  );
};

export const DashboardBodyWrapper: React.FC<
  DashboardBaseProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-col", className)}>
      {children}
    </div>
  );
};

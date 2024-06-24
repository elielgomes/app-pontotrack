import {
  DashboardBodyWrapper,
  DashboardRootLayout,
  DashboardSidebarWrapper,
} from "@/components/layout/dashboard/";
import { Header } from "@/components/layout/dashboard/header";
import { Sidebar } from "@/components/layout/dashboard/sidebar";
import { UserProvider } from "@/contexts/user-provider";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <div className="min-h-screen w-full bg-background">
        <DashboardRootLayout>
          <DashboardSidebarWrapper>
            <Sidebar />
          </DashboardSidebarWrapper>
          <DashboardBodyWrapper>
            <Header />
            {children}
          </DashboardBodyWrapper>
        </DashboardRootLayout>
      </div>
    </UserProvider>
  );
};
export default AppLayout;

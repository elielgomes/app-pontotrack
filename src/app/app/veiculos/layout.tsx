import {
  MainWrapper,
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
} from "@/components/layout/dashboard/main";

const VeiculosLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle>Veículos</MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default VeiculosLayout;

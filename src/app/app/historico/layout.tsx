import {
  MainWrapper,
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
} from "@/components/layout/dashboard/main";

const HistoricoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle>Histórico</MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default HistoricoLayout;

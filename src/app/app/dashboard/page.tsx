import { NextPage } from "next";
import { Stats } from "@/app/app/dashboard/_components/stats";
import { Occurrences } from "@/app/app/dashboard/_components/occurrences";
import { TopDrivers } from "@/app/app/dashboard/_components/top-drivers";

const DashboardPage: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
        <Stats />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-full lg:col-span-2">
          <Occurrences />
        </div>
        <div className="col-span-full lg:col-span-1 flex">
          <TopDrivers />
        </div>
      </div>
    </>
  );
};
export default DashboardPage;

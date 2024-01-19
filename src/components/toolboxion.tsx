// Generated with Ion on 1/18/2024, 3:28:37 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:14746
import BankingPage from "@/components/BankingPage";
import CreditPage from "@/components/CreditPage";
import { Tab, Tabs, TabsList } from "@/components/ion/Tabs";
import ToolboxSidebar from "@/components/ion/ToolboxSidebar";
import { useState } from "react";

function ToolboxIon() {
  const [selectedTab, setSelectedTab] = useState("Banking");

  return (
    <div className="bg-base flex h-screen w-screen items-start">
      <ToolboxSidebar />
      <div className="flex h-full flex-1 flex-col items-start">
        <div className="font-NotoSans flex w-full items-center p-8 text-[38px] font-semibold leading-snug text-[#1d1d1d]">
          Accounting
        </div>
        <Tabs
          className="w-full"
          value={selectedTab}
          onValueChange={setSelectedTab}
        >
          <TabsList type={"simple"} className="w-full">
            <Tab value="Banking" className="w-full">
              Banking
            </Tab>
            <Tab value="Credit" className="w-full">
              Credit
            </Tab>
          </TabsList>
        </Tabs>
        {selectedTab === "Banking" && <BankingPage />}
        {selectedTab === "Credit" && <CreditPage />}
      </div>
    </div>
  );
}
export default ToolboxIon;

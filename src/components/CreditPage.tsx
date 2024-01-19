// Generated with Ion on 1/18/2024, 3:28:37 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:14746
import CurrentBalanceCard from "@/components/ion/CurrentBalanceCard";
import FilterPill from "@/components/ion/FilterPill";
import Input from "@/components/ion/Input";
import Pagination from "@/components/ion/Pagination";
import PaymentDueCard from "@/components/ion/PaymentDueCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Table from "@/components/ion/Table";

function CreditPage() {
  const [timePeriod, setTimePeriod] = useState("");

  return (
    <>
      <div className="flex w-full items-end gap-3 px-8 pt-3">
        <Input
          placeholder="Aug 1, 2023 - Aug 28, 2023"
          iconTrailing={<ChevronDown size={16} />}
          label="Time Period"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        />
      </div>
      <div className="flex w-full items-end gap-3 px-8 pt-6">
        <FilterPill text="Payments" selected={true} />
        <FilterPill text="Statements" selected={false} />
        <FilterPill text="Historical Statements" selected={false} />
      </div>
      <div className="flex w-full items-start gap-6 px-8 py-6">
        <Table
          bordered
          columns={[
            {
              header: "Date",
              cell: ({ row }) => <p>{row.original.date}</p>,
            },
            {
              header: "Amount",
              cell: ({ row }) => <p>{row.original.amount}</p>,
            },
          ]}
          data={[
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
            {
              date: "Apr 26th, 2023",
              amount: "-$658.63",
            },
          ]}
        />
        <div className="flex flex-1 flex-col items-start gap-6">
          <CurrentBalanceCard amount="$ 45,987.34" />
          <PaymentDueCard
            dateRange="Aug 1, 2023 — Aug 28, 2023"
            dueDate="Sep 1st, 2023"
            amount="$ 4,987.34"
          />
        </div>
      </div>
      <div className="flex h-[37px] w-full items-center justify-center gap-6 px-8 py-6">
        <Pagination />
      </div>
    </>
  );
}

export default CreditPage;

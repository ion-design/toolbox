// Generated with Ion on 1/18/2024, 3:28:37 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:14468
import { MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ion/Button";
type CurrentBalanceCardProps = {
  amount?: string;
};

function CurrentBalanceCard({
  amount = "$ 45,987.34",
}: CurrentBalanceCardProps) {
  function viewTransactionsClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("viewTransactionsClickHandler fired");
  }
  return (
    <div className="flex h-fit flex-col items-start gap-2.5 rounded-lg border border-[#eeeeee] bg-[#f6f6f64D] p-6">
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex flex-1 items-center gap-3">
          <div className="bg-[#3a69591a] flex items-center justify-center gap-2.5 rounded-full p-2.5">
            <img
              src="/images/accounting-credit-payments-ion-re-make/pie-chart.svg"
              alt="pie-chart"
              className="h-full w-full"
            />
          </div>
          <div className="font-NotoSans text-base font-semibold leading-snug text-[#4d4d4d]">
            Current Balance
          </div>
        </div>
        <div className="font-NotoSans w-[218px] text-3xl font-bold leading-snug text-[#1d1d1d]">
          {amount}
        </div>
        <Button
          iconTrailing={<ChevronRight size={16} />}
          emphasis="low"
          color="primary"
          size="sm"
          onClick={viewTransactionsClickHandler}
        >
          View Transactions
        </Button>
      </div>
    </div>
  );
}
export default CurrentBalanceCard;

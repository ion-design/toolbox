// Generated with Ion on 1/18/2024, 3:28:37 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:14501
import Button from "@/components/ion/Button";
import { MouseEvent } from "react";
type PaymentDueCardProps = {
  amount?: string;
  dueDate?: string;
  dateRange?: string;
};

function PaymentDueCard({
  amount = "$ 4,987.34",
  dueDate = "Sep 1st, 2023",
  dateRange = "Aug 1, 2023 — Aug 28, 2023",
}: PaymentDueCardProps) {
  function payNowClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("payNowClickHandler fired");
  }
  return (
    <div className="bg-[#f6f6f64D] relative flex h-fit flex-col items-start gap-3 rounded-lg border border-[#eeeeee] px-6 pb-6 pt-4">
      <div className="font-NotoSans w-[218px] text-sm text-[#9d9d9d]">
        {dateRange}
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="bg-[#3a69591a] flex items-center justify-center gap-2.5 rounded-full p-2.5">
              <img
                src="/images/accounting-credit-payments-ion-re-make/money-check-dollar.svg"
                alt="money-check-dollar"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="font-NotoSans flex flex-col items-start gap-0.5">
            <div className="text-base font-semibold leading-snug text-[#4d4d4d]">
              Payment Due
            </div>
            <div className="text-primary text-sm font-medium">{dueDate}</div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <div className="font-NotoSans flex flex-col items-start justify-center gap-0.5 text-3xl font-bold leading-snug text-[#1d1d1d]">
            {amount}
          </div>
          <Button
            emphasis="high"
            color="primary"
            size="md"
            className={"w-full"}
            onClick={payNowClickHandler}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
export default PaymentDueCard;

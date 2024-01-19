// Generated with Ion on 1/18/2024, 3:28:39 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:14740
import Button from "@/components/ion/Button";
import { Gift } from "lucide-react";

function ToolboxSidebar() {
  return (
    <div className="flex h-screen overflow-hidden w-[241px] flex-col items-start bg-[#1d1d1d]">
      <div className="flex w-full items-center gap-3 bg-[#1d1d1d] px-6 pb-6 pt-14">
        <img
          src="/images/accounting-credit-payments-ion-re-make/Logo.svg"
          alt="Logo"
          className="h-full w-7/12"
        />
      </div>
      <div className="flex w-full flex-1 flex-col items-start gap-3 px-6 pt-10">
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/clipboard2-data.svg"
            alt="clipboard2-data"
            className="h-5 w-5"
          />
          <div className="w-[109px]">Dashboard</div>
          <img
            src="/images/accounting-credit-payments-ion-re-make/arrow-down-mini.svg"
            alt="arrow-down-mini"
            className="h-4 w-4"
          />
        </div>
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/bank.svg"
            alt="bank"
            className="h-5 w-5"
          />
          <div className="w-[137px]">Banking</div>
        </div>
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/card-list.svg"
            alt="card-list"
            className="h-5 w-5"
          />
          <div className="w-[137px]">Credit</div>
        </div>
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/arrow-left-right.svg"
            alt="arrow-left-right"
            className="h-5 w-5"
          />
          <div className="w-[137px]">Transactions</div>
        </div>
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/cash-stack.svg"
            alt="cash-stack"
            className="h-[20px] w-5"
          />
          <div className="w-[109px]">Pay</div>
          <img
            src="/images/accounting-credit-payments-ion-re-make/arrow-down-mini-14.svg"
            alt="arrow-down-mini"
            className="h-4 w-4"
          />
        </div>
        <div className="flex w-full flex-col items-end gap-3">
          <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded bg-[#333333] px-3 py-2.5 text-base font-semibold leading-snug">
            <img
              src="/images/accounting-credit-payments-ion-re-make/briefcase.svg"
              alt="briefcase"
              className="h-5 w-[20px]"
            />
            <div className="w-[109px]">Admin</div>
            <img
              src="/images/accounting-credit-payments-ion-re-make/arrow-down-mini-16.svg"
              alt="arrow-down-mini"
              className="h-4 w-4"
            />
          </div>
          <div className="relative flex w-[172px] flex-col items-start gap-1">
            <div className="text-primary-foreground font-NotoSans flex w-[172px] items-center gap-3 rounded-lg px-3 py-2 text-sm">
              <div className="w-[148px]">Cards</div>
            </div>
            <div className="text-primary-foreground font-NotoSans flex w-[172px] items-center gap-3 rounded-lg bg-[#333333] px-3 py-2 text-sm">
              <div className="w-[148px]">Accounting</div>
            </div>
            <div className="text-primary-foreground font-NotoSans flex w-[172px] items-center gap-3 rounded px-3 py-2 text-sm font-semibold">
              <div className="w-[148px]">Team</div>
            </div>
            <div className="absolute bottom-0 left-[-13px] h-[116px] w-[1px] bg-[#4d4d4d]" />
          </div>
        </div>
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/medal.svg"
            alt="medal"
            className="h-5 w-5"
          />
          <div className="w-[137px]">Rewards</div>
        </div>
        <div className="text-primary-foreground font-NotoSans flex w-full items-center gap-3 rounded px-3 py-2.5 text-base leading-snug">
          <img
            src="/images/accounting-credit-payments-ion-re-make/arrow-up-right-square.svg"
            alt="arrow-up-right-square"
            className="h-5 w-5"
          />
          <div className="w-[137px]">Funding</div>
        </div>
      </div>
      <div className="flex h-1/4 w-full flex-col items-center justify-end gap-12 px-4 pb-8">
        <Button size="lg" className="w-full" iconLeading={<Gift size={16} />}>
          Earn $2,000
        </Button>
        <div className="flex w-full items-center justify-between p-2.5">
          <div className="flex w-[159px] items-center gap-3">
            <div className="bg-base flex h-full w-8 items-center justify-center gap-[9px] rounded-[91.42857360839844px] p-[9px]">
              <img
                src="/images/accounting-credit-payments-ion-re-make/Vector.svg"
                alt="Vector"
                className="h-[15px] w-[12px]"
              />
            </div>
            <div className="font-NotoSans flex h-full flex-1 flex-col items-start justify-center gap-0.5">
              <div className="text-primary-foreground text-base font-semibold leading-snug">
                Michael Colgan
              </div>
              <div className="w-[94px] text-sm text-[#9d9d9d]">Toolbox</div>
            </div>
          </div>
          <img
            src="/images/accounting-credit-payments-ion-re-make/three-dots-vertical.svg"
            alt="three-dots-vertical"
            className="h-4 w-1/12"
          />
        </div>
      </div>
    </div>
  );
}
export default ToolboxSidebar;

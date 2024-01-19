// Generated with Ion on 1/18/2024, 3:42:08 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:15089
import Button from "@/components/ion/Button";
import { MouseEvent } from "react";

function BankingPage() {
  function applyForAToolboxDespositAccountClickHandler(
    e: MouseEvent<HTMLButtonElement>
  ) {
    alert("applyForAToolboxDespositAccountClickHandler fired");
  }
  function talkToSalesClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("talkToSalesClickHandler fired");
  }

  return (
    <div className="flex h-5/6 w-full flex-col items-center gap-8 px-8 pb-12 pt-[100px]">
      <div className="font-NotoSans flex flex-col items-center gap-4 text-center">
        <img
          src="/images/accounting-banking-statements-ion-re-make/cone2.svg"
          alt="cone2"
          className="h-12 w-1/12"
        />
        <div className="flex w-full flex-col items-center gap-2">
          <div className="text-base-foreground text-3xl font-medium">
            Your company does not have a Toolbox Deposit Account
          </div>
          <div className="text-sub-foreground text-xl">
            You can apply for one or talk to our sales team to learn more.
          </div>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Button
          emphasis="high"
          color="primary"
          size="lg"
          onClick={applyForAToolboxDespositAccountClickHandler}
        >
          Apply for a Toolbox Desposit Account
        </Button>
        <Button
          emphasis="medium"
          color="primary"
          size="lg"
          onClick={talkToSalesClickHandler}
        >
          Talk to Sales
        </Button>
      </div>
    </div>
  );
}

export default BankingPage;

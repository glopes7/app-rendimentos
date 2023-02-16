import { useState } from "react";
import { Quote, QuoteBox } from "../components/QuoteBox";

export default function Home() {
  const [numInputs, setNumInputs] = useState(0);

  const [contributionAmount, setContributionAmount] = useState(0);

  const [quoteValues, setQuoteValues] = useState<Quote[]>([]);

  const generateQuoteElements = () => {
    const newQuotes = Array<Quote>(numInputs).fill({
      name: "asdasdsa",
      lastIncome: 0,
      quoteValue: 0,
    });

    return newQuotes.map((defaultQuote, i) => (
      <QuoteBox
        key={i}
        quote={quoteValues[i] || defaultQuote}
        division={contributionAmount / numInputs}
        onNameChange={(newName) => {
          const oldValue = [...quoteValues];
          oldValue[i] = { ...defaultQuote, ...oldValue[i], name: newName };
          setQuoteValues(oldValue);
        }}
        onQuoteValueChange={(newValue) => {
          const oldValue = [...quoteValues];
          oldValue[i] = {
            ...defaultQuote,
            ...oldValue[i],
            quoteValue: newValue,
          };
          setQuoteValues(oldValue);
        }}
        onLastIncomeChange={(newValue) => {
          const oldValue = [...quoteValues];
          oldValue[i] = {
            ...defaultQuote,
            ...oldValue[i],
            lastIncome: newValue,
          };
          setQuoteValues(oldValue);
        }}
      />
    ));
  };

  return (
    <div>
      <h1 className=" text-center text-[40px] mt-[104px] flex justify-center font-inter font-extralight mb-[80px] ">
        CALCULADORA DE RENDIMENTOS
      </h1>
      <div className=" absolute left-1/2 -translate-x-1/2 flex  flex-col items-center gap-y-4">
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            setNumInputs(parseInt(e.target.inputQntd.value));
            setContributionAmount(
              parseInt(e.target.contributionAmountInput.value)
            );
            setQuoteValues([]);
          }}
          className="flex flex-col items-center  gap-y-4"
        >
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text text-lg font-inter font-extralight">
                Valor do aporte
              </span>
            </label>
            <input
              type="number"
              placeholder="R$"
              className="input input-bordered w-full max-w-xs"
              name="contributionAmountInput"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-lg font-inter font-extralight">
                Número de Ativos
              </span>
            </label>
            <input
              required
              name="inputQntd"
              type="number"
              placeholder="Nº"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button
            type="submit"
            className=" btn btn-primary  py-[12px] px-[38px]"
          >
            Enter
          </button>
        </form>
        <div className="flex flex-wrap gap-5 justify-center">
          {generateQuoteElements()}
        </div>
      </div>
    </div>
  );
}

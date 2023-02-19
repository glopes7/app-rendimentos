import { useMemo, useState } from "react";
import { Quote, QuoteBox } from "../components/QuoteBox";

const defaultQuote: Quote = {
  applyValue: 0,
  currentIncome: 0,
  currentValue: 0,
  gains: 0,
  leftover: 0,
  numQuote: 0,
  
};

export default function Home() {
  const [numInputs, setNumInputs] = useState(0);

  const [contributionAmount, setContributionAmount] = useState(0);

  const [quoteValues, setQuoteValues] = useState<Quote[]>([]);

  const totalGains = useMemo(
    () => quoteValues.reduce((sum, value) => sum + Number(value?.gains), 0),
    [quoteValues]
  );

  const totalLeftOver = useMemo(
    () => quoteValues.reduce((sum, value) => sum + Number(value?.leftover), 0),
    [quoteValues]
  );

  const updateQuoteValues = (newValue: Partial<Quote>, index: number) => {
    setQuoteValues((prev) => {
      const oldValue = [...prev];
      oldValue[index] = {
        ...defaultQuote,
        ...oldValue[index],
        ...newValue,
      };

      return oldValue;
    });
  };

  const generateQuoteElements = () => {
    const defaultQuotes = Array<Quote>(numInputs).fill(defaultQuote);

    return defaultQuotes.map((defaultQuote, index) => (
      <QuoteBox
        key={index}
        quote={quoteValues[index] || defaultQuote}
        available={contributionAmount / numInputs}
        onQuoteChange={(newValue) => updateQuoteValues(newValue, index)}
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
              placeholder="R$ 999,999.00"
              className="input input-bordered w-full max-w-xs"
              name="contributionAmountInput"
            />
          </div>
          <div>
            <div className="App"></div>
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
              placeholder="Nº 10"
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
        <div
          className={`text-xl text-green-500 ${
            Boolean(totalGains) ? "" : "invisible"
          }`}
        >
          Rendimento Mensal: R$ {totalGains.toFixed(2)} <br />
          <div className="text-red-500">Sobras Totais: R$ {totalLeftOver.toFixed(2)} </div>
          
        </div>
        <div className="flex flex-wrap gap-5 justify-center mb-12">
          {generateQuoteElements()}
        </div>
      </div>
    </div>
  );
}

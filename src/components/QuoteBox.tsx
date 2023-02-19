import { useEffect } from "react";
import { quoteData } from "../utils/quotesData";

export type Quote = {
  currentValue: number;
  currentIncome: number;
  gains: number;
  leftover: number;
  numQuote: number;
  applyValue: number;
};

type QuoteBoxProps = {
  quote: Quote;
  available: number;
  onQuoteChange: (newValue: Partial<Quote>) => void;
};

export function QuoteBox({ quote, available, onQuoteChange }: QuoteBoxProps) {
  const notEnoughMoney = available < quote.currentValue;

  return (
    <div
      className={`card w-96 shadow-xl ${
        notEnoughMoney ? "bg-red-900" : "bg-base-100 "
      }`}
    >
      <div className=" card-body">
        <div className="gap-0">
          <div className="font-inter font-extralight text-green-500">
            Valor Disponível: R$ {available.toFixed(2)}
          </div>
          <div className="font-inter font-extralight text-green-500">
            {" "}
            Valor Aplicado: R$ {quote.applyValue.toFixed(2)}{" "}
          </div>
          <div className="font-inter font-extralight text-red-500 ">
            Sobras: R$ {quote.leftover.toFixed(2)}
          </div>
        </div>

        <div className="flex justify-between items-center gap-x-2">
          <select
            className="select w-44"
            onChange={async (e) => {
              const value = e.target.value;
              const quoteId = value.split("-")[0].trim().toLowerCase();

              const result = await fetch(
                `https://rendimento.duckdns.org/${quoteId}`
              );
              const data = await result.json();

              const applyValue = Number(Math.abs(available - quote.leftover));

              const numQuote = Number(
                Math.trunc(available / data.currentValue)
              );
              const gains = Number(numQuote * data.currentIncome);

              const leftover = Number(
                Math.abs(numQuote * data.currentValue - available)
              );

              onQuoteChange({ ...data, gains, leftover, numQuote, applyValue });
            }}
            defaultValue="Encontre seu FII"
          >
            <option disabled>Encontre seu FII</option>
            {quoteData.map((quote, index) => (
              <option key={index}>{quote}</option>
            ))}
          </select>
          <div className="flex flex-col">
            <div className="form-control items-center w-32">
              <label className="label">
                <span className="flex text-center label-text font-inter font-extralight">
                  Und. de Cotas
                </span>
              </label>
              <input
                placeholder="Quantidade"
                type="number"
                className=" input input-sm input-bordered w-32 py-4 "
                disabled
                value={quote.numQuote === Infinity ? 0 : quote.numQuote}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label>Valor da Cota</label>
          <label className="w-auto input-group">
            <input
              className=" input input-sm input-bordered w-20"
              type="number"
              value={quote.currentValue}
              onChange={(e) =>
                onQuoteChange({ currentValue: parseFloat(e.target.value) })
              }
            />
            <span className="bg-primary">R$</span>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <label>Ultimo Rendimento</label>
          <label className="w-auto input-group">
            <input
              className=" input input-sm input-bordered w-20"
              type="number"
              value={quote.currentIncome}
              onChange={(e) =>
                onQuoteChange({ currentIncome: parseFloat(e.target.value) })
              }
            />
            <span className=" bg-primary">R$</span>
          </label>
        </div>
        <div
          className={`${
            Boolean(quote.gains) ? "1" : "invisible"
          } text-green-500`}
        >
          Rendimento: R$ {quote.gains.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { QuoteBox } from "../components/QuoteBox";

export default function Home() {
  const [quotes, setQuote] = useState(1);

  return (
    <div>
      <h1 className=" text-center text-[40px] mt-[104px] flex justify-center font-inter font-extralight mb-[80px] ">
        CALCULADORA DE RENDIMENTOS
      </h1>
      <div className=" absolute left-1/2 -translate-x-1/2 flex  flex-col items-center gap-y-4">
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            setQuote(parseInt(e.target.inputQntd.value));
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
          {Array(quotes)
            .fill(0)
            .map(() => (
              <QuoteBox />
            ))}
        </div>
      </div>
    </div>
  );
}

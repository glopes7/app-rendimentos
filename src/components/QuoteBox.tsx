export type Quote = {
  name: string;
  quoteValue: number;
  lastIncome: number;
};

type QuoteBoxProps = {
  quote: Quote;
  division: number;
  onNameChange: (value: string) => void;
  onQuoteValueChange: (value: number) => void;
  onLastIncomeChange: (value: number) => void;
};

export function QuoteBox({
  quote,
  division,
  onNameChange,
  onQuoteValueChange,
  onLastIncomeChange,
}: QuoteBoxProps) {
  const numQuote = Math.trunc(division / quote.quoteValue);
  const sobra = Math.abs(numQuote * quote.quoteValue - division);
  const gains = numQuote * quote.lastIncome;
  return (
    <div className="card w-96  bg-base-100 shadow-xl">
      <div className=" card-body">
        Division: {division} Sobra: R$ {sobra.toFixed(2)}
        <div className="flex justify-between items-center  ">
          <input
            type="text"
            placeholder="Ativo"
            className="input input-bordered w-32"
            value={quote.name}
            onChange={(e) => onNameChange(e.target.value)}
          />
          <div className="flex flex-col ">
            <div className="form-control w-full max-w-xs items-center">
              <label className=" label">
                <span className="label-text font-inter font-extralight">
                  Quantidade de Cotas
                </span>
              </label>
              <input
                placeholder="Quantidade"
                type="number"
                className=" input input-sm input-bordered w-36 py-4 "
                disabled
                value={numQuote === Infinity ? 0 : numQuote}
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
              value={quote.quoteValue}
              onChange={(e) => onQuoteValueChange(parseFloat(e.target.value))}
            />
            <span className="bg-primary">R$</span>
          </label>
        </div>
        {/* <div className="flex justify-between items-center">
          <label>Dividend Yeld</label>
          <label className="w-auto input-group">
            <input
              className=" input input-sm input-bordered w-20 "
              type="number"
            />
            <span className="  bg-primary">&nbsp;%</span>
          </label>
        </div> */}
        <div className="flex justify-between items-center">
          <label>Ultimo Rendimento</label>
          <label className="w-auto input-group">
            <input
              className=" input input-sm input-bordered w-20"
              type="number"
              value={quote.lastIncome}
              onChange={(e) => onLastIncomeChange(parseFloat(e.target.value))}
            />
            <span className=" bg-primary">R$</span>
          </label>
        </div>
      </div>
      Ganhos: {gains}
    </div>
  );
}

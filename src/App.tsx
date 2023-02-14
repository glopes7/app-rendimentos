export default function App() {
  return (
    <div>
      <h1 className=" text-center text-[40px] mt-[104px] flex justify-center font-inter font-extralight mb-[141px] ">
        CALCULADORA DE RENDIMENTOS
      </h1>
      <div className=" absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-3">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg font-inter font-extralight">Valor do aporte</span>
          </label>
          <input
            type="number"
            placeholder="R$"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg font-inter font-extralight">Número de Ativos</span>
          </label>
          <input
            type="number"
            placeholder="Nº"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className=" btn btn-primary  py-[12px] px-[38px]">Enter</button>
      </div>
    </div>
  );
}

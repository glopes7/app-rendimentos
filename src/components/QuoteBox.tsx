export function QuoteBox() {
  return (
    <div className="card w-96  bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center  ">
          <input
            type="text"
            placeholder="Ativo"
            className="input input-bordered w-32"
          />
          <div className="flex flex-col gap-1 ">
            <input
              type="text"
              className=" input input-bordered w-36 h-4 py-4 "
              disabled
            />
            <input
              type="text"
              className=" input input-bordered w-36 h-4 py-4 "
              disabled
              />

              
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label>Dividend Yeld</label>
          <label className="w-auto input-group">
            <input
              className=" input input-sm input-bordered w-20"
              type="number"
            />
            <span className="bg-primary">&nbsp;%</span>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <label>Ultimo Rendimento</label>
          <label className="w-auto input-group">
            <input
              className=" input input-sm input-bordered w-20"
              type="number"
            />
            <span className="bg-primary">R$</span>
          </label>
        </div>
      </div>
    </div>
  );
}

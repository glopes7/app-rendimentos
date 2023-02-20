import { Navigate, Route, Router } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [goToCalculator, SetGoToCalculator] = useState(false);

  if (goToCalculator) {
    return <Navigate to="/calculator" />;
  }
  return (
    <div>
      <div className=" px-2 py-2 items-center bg-gray-200 flex justify-between">
        <button className="border-none text-lg btn bg-green-500">
          Pagina Inicial
        </button>
        <div>
          <button
            onClick={() => {
              SetGoToCalculator(true);
            }}
            className=" bg-green-500 border-none btn text-center"
          >
            Calculadora
          </button>
        </div>
        <div className="flex gap-2  items-center">
          <button className="btn">Começe Já</button>
          <div>
            <button className="btn">login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Navigate, Route, Router } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  const [goToCalculator, setGoToCalculator] = useState(false);

  if (goToCalculator) {
    return <Navigate to="/calculator" />;
  }

  return (
    <div>
      <div className="navbar border-b border-zinc-200  min-h-max p-1 ">
        
        <div className="navbar-start h-12">
          <a href="/" className="block">
            <img
              className=" h-auto w-40 ml-4 "
              src="/images/logo-header.png"
              alt="logo-header"
            />
          </a>

          <button
            onClick={() => {
              setGoToCalculator(true);
            }}
            className="btn-primary btn-xs text-[9px] btn text-white  flex ml-5 mb-[-6px] "
          >
            Calculadora
          </button>
        </div>

        <div className="navbar-start flex justify-end px-2 gap-1">
          <button
            className=" 
          btn btn-ghost btn-sm line  outline-none  text-sm normal-case"
          >
            Login
          </button>
          <a className="btn btn-primary btn-sm text-white normal-case  ">
            Comece Já
          </a>
        </div>
      </div>
    </div>
  );
}

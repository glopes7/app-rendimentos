import { Navigate, Route, Router } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  const [goToCalculator, SetGoToCalculator] = useState(false);

  if (goToCalculator) {
    return <Navigate to="/calculator" />;
  }
  return (
    <div className="flex justify-center p-8">
      <button
        className="btn btn-primary"
        onClick={() => {
          SetGoToCalculator(true);
        }}
      >
        Calculadora
      </button>
    </div>
  );
}

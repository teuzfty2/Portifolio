import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CorpoPai from "./body/fundoTela/corpoPai";
import PlanoDeFundoAnimado from "./body/fundoTela/planoFundo"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CorpoPai/>
    <PlanoDeFundoAnimado />
    
    
    {/*<App />*/}
  </StrictMode>
);

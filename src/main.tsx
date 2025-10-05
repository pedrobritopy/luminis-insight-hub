import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("LuminisData App iniciando...");

createRoot(document.getElementById("root")!).render(<App />);

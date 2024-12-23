import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuizProvider } from "./contexts/QuizContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuiz } from "./contexts/QuizContext";
import HomePage from "./pages/HomePage/HomePage";
import Html from "./pages/HtmlPage/Html";
import Css from "./pages/CssPage/Css";
import Error from "./components/Error/Error";
import JavaScript from "./pages/JavaScriptPage/JavaScript";
import Accessibility from "./pages/Accessibility/Accessibility";

function App() {
  const { questions, status } = useQuiz();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            status === "ready" && questions.length > 0 ? (
              <HomePage />
            ) : (
              <Error />
            )
          }
        />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<JavaScript />} />
        <Route path="accessibility" element={<Accessibility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

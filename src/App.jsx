import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Html from "./pages/HtmlPage/Html";
import Css from "./pages/CssPage/Css";
import JavaScript from "./pages/JavaScriptPage/JavaScript";
import Accessibility from "./pages/Accessibility/Accessibility";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<JavaScript />} />
        <Route path="accessibility" element={<Accessibility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

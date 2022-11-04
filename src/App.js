import "./App.css";
import Counter from "./Components/Counter";
import ErrorPage from "./Components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ErrorBoundary from "./Components/ErrorBoundary";
import CountTwo from "./Components/CountTwo";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Counter />} />
          <Route path="/" element={<Counter />} />
          <Route path="/CountTwo" element={<CountTwo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

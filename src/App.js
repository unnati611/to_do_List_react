import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comoponents/Home";
import LoginForms from "./comoponents/LoginForm";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<LoginForms />} />
      </Routes>
    </BrowserRouter>
  );
}

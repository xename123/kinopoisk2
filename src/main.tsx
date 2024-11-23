import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import { routes } from "./pages/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <Header></Header>
    <div className="wrapper">
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </div>
  </BrowserRouter>
);

import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { NotFound } from "../components/NotFound";
import { Continents } from "../pages/Continents";
import { Country } from "../pages/Country";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

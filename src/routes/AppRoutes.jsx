import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { NotFound } from "../components/NotFound/NotFound";
import { Country } from "../pages/Country";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

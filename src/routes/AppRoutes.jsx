import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { NotFound } from "../components/NotFound";
import { Continents} from "../pages/Continents";
import Countries from "../pages/Countries"; 

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

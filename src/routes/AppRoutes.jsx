import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { NotFound } from "../components/NotFound";
import { Continents} from "../pages/Continents";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Continents />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

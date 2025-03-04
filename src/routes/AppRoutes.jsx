import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar"
import { NotFound } from "../components/NotFound/NotFound";
import { Home } from "../pages/Home";
import { Countries } from "../pages/Countries";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

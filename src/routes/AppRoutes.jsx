import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar"
import { NotFound } from "../components/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { ZipCode } from "../pages/ZipCode/ZIpCode";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zip" element={<ZipCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

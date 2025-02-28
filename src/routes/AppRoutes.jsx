import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/Home'
import { Navbar } from '../components/Navbar/Navbar'

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

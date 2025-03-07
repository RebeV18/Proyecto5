import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Loading } from "../components/Loading";
import { ErrorBoundary } from "../components/Error/ErrorBoundary";

const Continents = lazy(() => import("../pages/Continents"));
const Country = lazy(() => import("../pages/Country"));

export const AppRoutes = () => {
  return (
    <>
      {/* <ErrorBoundary> */}
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Continents />} />
            <Route path="/country/:id" element={<Country />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      {/* </ErrorBoundary> */}
    </>
  );
};

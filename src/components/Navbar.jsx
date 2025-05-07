import { useNavigate } from "react-router-dom";
import Button from "./Button";

//Barra de navegación de la aplicación, con botón para volver al Home.
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row-reverse text-white p-10 bg-gradient-to-b from-[#45C4B0] via-purple-800 to-slate-900">
      <Button
        className="border-4 border-[#45C4B0] rounded-lg text-white p-1.5 text-base lg:text-lg xl:text-xl 2xl:text-4xl"
        onClick={() => navigate(-1)}
      >
        Inicio
      </Button>
    </nav>
  );
};

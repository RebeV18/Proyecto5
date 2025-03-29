import { useNavigate } from "react-router-dom";
import Button from "./Button";

//Barra de navegación de la aplicación, con botón para volver al Home.
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row-reverse text-white p-10 bg-gradient-to-b from-amber-700 via-amber-900 to-sky-900">
      <Button
        className="border-4 border-amber-500 rounded-lg p-1.5 bg-esmerald-400 lg:text-2xl"
        onClick={() => navigate(-1)}
      >
        Inicio
      </Button>
    </nav>
  );
};

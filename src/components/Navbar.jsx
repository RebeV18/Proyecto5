import { useNavigate } from "react-router-dom";
import Button from "./Button";

//Barra de navegación de la aplicación, con botón para volver al Home.
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row-reverse p-10 bg-gradient-to-b from-teal-400 to-cyan-200 bg-blend-soft-light">
      <Button
        className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5 bg-esmerald-400"
        onClick={() => navigate(-1)}
      >
        Inicio
      </Button>
    </nav>
  );
};

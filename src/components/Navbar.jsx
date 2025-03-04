import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-end p-3 bg-">
      <Link
        to="/"
        className="text-third-color text-center p-1 gap-1 shadow-sm rounded-sm transition duration-300"
      >
        Inicio
      </Link>
    </nav>
  );
};
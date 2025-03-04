import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-end p-10 bg-blue-200 bg-blend-soft-light">
      <Link
        to="/"
        className="bg-white text-third-color text-center p-2 gap-1 shadow-sm rounded-sm transition duration-0.3"
      >
        Inicio
      </Link>
    </nav>
  );
};
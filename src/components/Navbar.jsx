import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="items-end p-3 bg-var(--second-color)-transparent">
      <Link
        to="/"
        className="text-var(--third-color) text-center p-0.7 gap-1 shadow-sm rounded-sm transition-0.3s"
      >
        Inicio
      </Link>
    </nav>
  );
};

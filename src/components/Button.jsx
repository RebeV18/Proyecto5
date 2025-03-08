import { Link } from "react-router-dom";

//Componente botón para ser utilizado en las páginas y componentes.
const Button = ({ to, children, className, onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;

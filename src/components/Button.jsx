import { Link } from 'react-router-dom';

const Button = ({ to, children, className, onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
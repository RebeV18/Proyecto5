import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="nav-container">
            <Link to='/' className="boton">Inicio</Link>
        </nav>
    )
}
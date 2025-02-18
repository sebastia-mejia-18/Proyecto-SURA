
import { useLocation } from "react-router-dom";
import "../diseño/diseñoPages.css";

const Header = () => {
    const location = useLocation();

    // Determinar qué botón mostrar en función de la ruta actual
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/registro";

    return (
        <header className="header-container">
            <div className="logo">
                {/* Aquí puedes agregar tu logo */}
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/acercade">Acerca de</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
            <div className="login-area">
                {/* Mostrar "Iniciar sesión" o "Registrarse" según la ruta */}
                {isLoginPage && (
                    <a href="/registro" className="login-button">Registrarse</a>
                )}
                {isRegisterPage && (
                    <a href="/login" className="login-button">Iniciar sesión</a>
                )}
                {!isLoginPage && !isRegisterPage && (
                    <a href="/login" className="login-button">Iniciar sesión</a>
                )}
            </div>
        </header>
    );
};

export default Header;

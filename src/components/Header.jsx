import "../diseño/diseñoPages.css";

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo">
                
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
            <div className="login-area">
                <a href="/login" className="login-button">Iniciar sesión</a>
            </div>
        </header>
    );
};

export default Header;

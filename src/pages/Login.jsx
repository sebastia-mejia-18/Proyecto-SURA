/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para manejar la navegación
import "../diseño/diseñoPages.css";
import Header from "../components/Header"; // Asegúrate de que la ruta sea correcta

const Login = () => {
    // Estado para manejar el usuario y la contraseña
    const [formData, setFormData] = useState({
        user: "",
        password: "",
    });

    // Estado para mensajes de error o éxito
    const [message, setMessage] = useState("");

    // Credenciales simuladas (puedes conectarlo a un backend más adelante)
    const validCredentials = {
        user: "admin",
        password: "1234",
    };

    // Manejar los cambios en los inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejar el envío del formulario
    const submitHandler = (event) => {
        event.preventDefault();

        // Validar credenciales
        if (
            formData.user === validCredentials.user &&
            formData.password === validCredentials.password
        ) {
            setMessage("Inicio de sesión exitoso. ¡Bienvenido!");
        } else {
            setMessage("Usuario o contraseña incorrectos.");
        }
    };

    return (
        <div>
            <Header />

            <div className="login-container">
                <form onSubmit={submitHandler} className="login-form">
                    <h1 className="login-title">Iniciar Sesión</h1>
                    
                    <div className="form-group">
                        <label htmlFor="user" className="form-label">
                            Usuario
                        </label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            className="form-input"
                            placeholder="Ingresa tu usuario"
                            value={formData.user}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="Ingresa tu contraseña"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Botón de enviar */}
                    <div className="text-center">
                        <button type="submit" className="login-button">
                            Iniciar sesión
                        </button>
                    </div>

                    {/* Mensaje de éxito o error */}
                    {message && (
                        <p className="login-message">
                            {message}
                        </p>
                    )}

                    {/* Enlace para registrarse */}
                    <div className="register-link-container text-center">
                    <p className="register-prompt" style={{ color: "white" }}>
                    ¿No tienes una cuenta?{" "}
                            <Link to="/register" className="register-link">
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

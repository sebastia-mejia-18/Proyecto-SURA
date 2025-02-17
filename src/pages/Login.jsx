/* eslint-disable no-unused-vars */
import React from "react";
import "../diseño/diseñoPages.css"
import Header from "../components/Header"; // Asegúrate de que la ruta sea correcta
import "../diseño/diseñoPages.css";

const Login = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Formulario enviado");
    };

    return (

        <div>
            <Header />

            <div className="login-container">
                <form onSubmit={submitHandler} className="login-form">
                    <h1 className="login-title">Iniciar Sesión</h1>
                    <div className="form-group">
                        <label htmlFor="user" className="form-label">Usuario</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            className="form-input"
                            placeholder="Ingresa tu usuario"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="login-button">
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

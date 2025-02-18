// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import '../diseño/diseñoRegistro.css'
import Header from "../components/Header";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        alert("Registro exitoso");
    };

    return (
        <div>
            <Header />
   
            <div className="register-container">
           <form onSubmit={handleSubmit} className="register-form">
                <h1 className="register-title">Registro</h1>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Escribe tu nombre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Escribe tu correo"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Crea una contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="register-button">
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;

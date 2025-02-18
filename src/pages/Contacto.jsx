// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../diseño/diseñoRegistro.css";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", formData);
    alert("Mensaje enviado exitosamente");
  };

  return (
    <div>
<Header />
   
    <div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h1 className="contact-title">Contáctanos</h1>
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
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;

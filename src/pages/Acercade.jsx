// eslint-disable-next-line no-unused-vars
import React from "react";
import "../diseño/diseñoRegistro.css";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
<Header />

    <div className="about-container">
      <h1 className="about-title">Acerca de Nike</h1>
      <p className="about-description">
        Nike, Inc. es una de las marcas más grandes y reconocidas mundialmente en la industria del calzado y la ropa deportiva. Con un legado de innovación, calidad y estilo, Nike ha transformado la manera en que las personas se visten y entrenan. Su misión es inspirar a cada atleta a alcanzar su máximo potencial, ofreciendo productos diseñados para el rendimiento y el estilo.
      </p>
      
      <div className="about-products">
        <div className="product-card">
          <img 
            src="/src/img/air max.png"  // Ruta local de la imagen
            alt="Nike Air Max"
            className="product-image" 
          />
          <p className="product-name">Nike Air Max</p>
        </div>

        <div className="product-card">
          <img 
            src="/src/img/jordan.png"  // Ruta local de la imagen
            alt="Nike Jordan" 
            className="product-image" 
          />
          <p className="product-name">Nike Jordan</p>
        </div>

        <div className="product-card">
          <img 
            src="/src/img/one.png"  // Ruta local de la imagen
            alt="Nike Blazer" 
            className="product-image" 
          />
          <p className="product-name">Nike Blazer</p>
        </div>
      </div>

      <p className="about-footer">
        Nike sigue marcando tendencias en el mundo del deporte y la moda, con un enfoque constante en la innovación y el diseño.
      </p>
    </div>
     </div>
  );
};

export default About;

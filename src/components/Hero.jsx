/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <div 
            id="carouselExampleIndicators" 
            className="carousel slide" 
            data-bs-ride="carousel"
        >
            {/* Indicadores */}
            <ol className="carousel-indicators">
                <li 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="0" 
                    className="active"
                ></li>
                <li 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="1"
                ></li>
                <li 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="2"
                ></li>
            </ol>

            {/* Carrusel */}
            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img 
                                    className="d-block w-100" 
                                    src="/src/img/image-removebg-preview (3).png" 
                                    alt="Zapato 1" 
                                />
                            </div>
                            <div className="col-md-4">
                                <img 
                                    className="d-block w-100" 
                                    src="/src/img/image-removebg-preview (2).png" 
                                    alt="Zapato 2" 
                                />
                            </div>
                            <div className="col-md-4">
                                <img 
                                    className="d-block w-100" 
                                    src="/src/img/Zapatilla.png" 
                                    alt="Zapato 3" 
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Slide 3 */}
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img 
                                    className="d-block w-100" 
                                    src="/src/img/Zapatilla.png" 
                                    alt="Zapato 7" 
                                />
                            </div>
                            <div className="col-md-4">
                                <img 
                                    className="d-block w-100" 
                                    src="/src/img/image-removebg-preview (1).png" 
                                    alt="Zapato 8" 
                                />
                            </div>
                            <div className="col-md-4">
                                <img 
                                    className="d-block w-100" 
                                    src="/src/img/image-removebg-preview.png" 
                                    alt="Zapato 9" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controles */}
            <a 
                className="carousel-control-prev" 
                href="#carouselExampleIndicators" 
                role="button" 
                data-bs-slide="prev"
            >
                <span 
                    className="carousel-control-prev-icon" 
                    aria-hidden="true" 
                    style={{ filter: 'brightness(0) invert(0)' }} // Color negro
                ></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a 
                className="carousel-control-next" 
                href="#carouselExampleIndicators" 
                role="button" 
                data-bs-slide="next"
            >
                <span 
                    className="carousel-control-next-icon" 
                    aria-hidden="true" 
                    style={{ filter: 'brightness(0) invert(0)' }} // Color negro
                ></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
};

export default Hero;

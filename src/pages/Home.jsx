import { Link } from "react-router-dom"; // Importa Link de React Router
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../diseño/diseñoPages.css"; // Asegúrate de que la ruta sea correcta

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container bg-gray-900 text-white">
                <Hero />
                {/* Sección de productos destacados */}
                <section className="featured-products py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="section-title">Mas comprados</h2>
                        <div className="products-grid mt-8">
                            {/* Producto 1 */}
                            <div className="product-card">
                                <img
                                    src="/src/img/zapatos 1.png"
                                    alt="Zapato 1"
                                    className="product-image"
                                />
                                <h3 className="product-title">Low Born x Raised</h3>
                                <p className="product-price">$469.99</p>
                                <Link to="/registro">
                                    <button className="product-button">
                                        Comprar Ahora
                                    </button>
                                </Link>
                            </div>
                            {/* Producto 2 */}
                            <div className="product-card">
                                <img
                                    src="/src/img/image-removebg-preview.png"
                                    alt="Zapato 2"
                                    className="product-image"
                                />
                                <h3 className="product-title">Low Court Purple</h3>
                                <p className="product-price">$79.99</p>
                                <Link to="/registro">
                                    <button className="product-button">
                                        Comprar Ahora
                                    </button>
                                </Link>
                            </div>
                            {/* Producto 3 */}
                            <div className="product-card">
                                <img
                                    src="/src/img/image-removebg-preview (1).png"
                                    alt="Zapato 3"
                                    className="product-image"
                                />
                                <h3 className="product-title">
                                    Low Pro x Powerpuff Girls
                                </h3>
                                <p className="product-price">$2,999</p>
                                <Link to="/registro">
                                    <button className="product-button">
                                        Comprar Ahora
                                    </button>
                                </Link>
                            </div>
                            {/* Producto 4 */}
                            <div className="product-card">
                                <img
                                    src="/src/img/zapatos3.png"
                                    alt="Zapato 4"
                                    className="product-image"
                                />
                                <h3 className="product-title">
                                    Travis Scott X SB Dunk Low Cactus Jack
                                </h3>
                                <p className="product-price">$1,299</p>
                                <Link to="/registro">
                                    <button className="product-button">
                                        Comprar Ahora
                                    </button>
                                </Link>
                            </div>
                            {/* Producto 5 */}
                            <div className="product-card">
                                <img
                                    src="/src/img/zapato.png"
                                    alt="Zapato 5"
                                    className="product-image"
                                />
                                <h3 className="product-title">
                                    Dunk Low Sean Cliver Holiday
                                </h3>
                                <p className="product-price">$299.99</p>
                                <Link to="/registro">
                                    <button className="product-button">
                                        Comprar Ahora
                                    </button>
                                </Link>
                            </div>
                            {/* Producto 6 */}
                            <div className="product-card">
                                <img
                                    src="/src/img/z.png"
                                    alt="Zapato 6"
                                    className="product-image"
                                />
                                <h3 className="product-title">
                                    Nike SB Dunk Low Pro Why So Sad
                                </h3>
                                <p className="product-price">$399</p>
                                <Link to="/registro">
                                    <button className="product-button">
                                        Comprar Ahora
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
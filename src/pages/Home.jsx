import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../diseño/diseñoPages.css"; // Asegúrate de que la ruta sea correcta

const Home = () => {
    return(
        <div>
            <Header />
            <div className="home-container bg-gray-900 text-white">
                <Hero />
                {/* Sección de productos destacados */}
                <section className="featured-products py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="section-title">Destacados</h2>
                        <div className="products-grid mt-8">
                            {/* Producto 1 */}
                            <div className="product-card">
                                <img src="/src/img/zapatos 1.png" alt="Zapato 1" className="product-image"/>
                                <h3 className="product-title">Low Born x Raised</h3>
                                <p className="product-price">$129.99</p>
                                <button className="product-button">Comprar Ahora</button>
                            </div>
                            {/* Producto 2 */}
                            <div className="product-card">
                                <img src="/src/img/image-removebg-preview.png" alt="Zapato 2" className="product-image"/>
                                <h3 className="product-title">Low Court Purple</h3>
                                <p className="product-price">$79.99</p>
                                <button className="product-button">Comprar Ahora</button>
                            </div>
                            {/* Producto 3 */}
                            <div className="product-car">
                                <img src="/src/img/image-removebg-preview (1).png" alt="Zapato 3" className="product-image"/>
                                <h3 className="product-title">Low Pro x Powerpuff Girls</h3>
                                <p className="product-price">$2,999</p>
                                <button className="product-button">Comprar Ahora</button>
                            </div>
                            {/* Producto 4 */}
                            <div className="product-card">
                                <img src="/assets/zapato4.jpg" alt="Zapato 4" className="product-image"/>
                                <h3 className="product-title">Zapato Deportivo</h3>
                                <p className="product-price">$89.99</p>
                                <button className="product-button">Comprar Ahora</button>
                            </div>
                            {/* Producto 5 */}
                            <div className="product-card">
                                <img src="/assets/zapato5.jpg" alt="Zapato 5" className="product-image"/>
                                <h3 className="product-title">Bota de Invierno</h3>
                                <p className="product-price">$99.99</p>
                                <button className="product-button">Comprar Ahora</button>
                            </div>
                            {/* Producto 6 */}
                            <div className="product-card">
                                <img src="/assets/zapato6.jpg" alt="Zapato 6" className="product-image"/>
                                <h3 className="product-title">Zapato Deportivo</h3>
                                <p className="product-price">$79.99</p>
                                <button className="product-button">Comprar Ahora</button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Home;

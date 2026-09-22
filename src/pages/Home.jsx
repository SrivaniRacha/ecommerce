
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    return (

        <div className="home">

            <section className="hero">

                <div className="hero-content">

                    <h1>
                        Welcome to ShopKart
                    </h1>

                    <h2>
                        Great Deals. Great Products.
                    </h2>

                    <p>
                        Discover amazing products at
                        affordable prices.
                    </p>

                    <Link
                        to="/products"
                        className="shop-now-button"
                    >
                        Shop Now
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default Home;


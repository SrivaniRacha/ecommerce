
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ searchTerm, setSearchTerm, cartCount }) {

    return (
        <>
            <nav className="navbar">

              
                <Link to="/" className="logo">
                    Srivani
                </Link>

              
                <div className="location">

                    <span className="small-text">
                        Deliver to
                    </span>

                    <span className="location-text">
                        📍 India
                    </span>

                </div>

             
                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search ShopKart"
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                    />

                    <button>
                        🔍
                    </button>

                </div>

               
                <div className="nav-item">

                    <span className="small-text">
                        Hello, sign in
                    </span>

                    <span>
                        Account & Lists
                    </span>

                </div>

                
                <div className="nav-item">

                    <span className="small-text">
                        Returns
                    </span>

                    <span>
                        & Orders
                    </span>

                </div>

        
                <Link to="/cart" className="cart">

                    🛒

                    <span>
                        Cart ({cartCount})
                    </span>

                </Link>

            </nav>

          
            <div className="sub-navbar">

                <Link to="/products">
                    ☰ All
                </Link>

                <Link to="/products">
                    Today's Deals
                </Link>

                <Link to="/products">
                    Customer Service
                </Link>

                <Link to="/products">
                    Electronics
                </Link>

                <Link to="/products">
                    Fashion
                </Link>

                <Link to="/products">
                    Home & Kitchen
                </Link>

                <Link to="/products">
                    Books
                </Link>

                <Link to="/products">
                    Best Sellers
                </Link>

            </div>
        </>
    );
}

export default Navbar;

import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">

            <Link to={`/product/${product.id}`} className="product-link">

                
                <div className="product-image-box">
                    <img
                        src={product.images?.[0]}
                        alt={product.name}
                    />
                </div>

                <h3 className="product-name">
                    {product.name}
                </h3>

               
                <p className="product-brand">
                    {product.brand}
                </p>

               
                <div className="product-rating">
                    <span className="star">★</span>
                    <span>{product.ratings}</span>
                    <span className="review-count">
                        ({product.reviews?.length || 0})
                    </span>
                </div>

                
                <p className="product-description">
                    {product.descriptions?.[0] || "High quality product"}
                </p>

                <div className="price-section">

                    <span className="current-price">
                        ₹{product.price}
                    </span>

                    {product.originalPrice && (
                        <span className="original-price">
                            ₹{product.originalPrice}
                        </span>
                    )}

                </div>

               
                {product.discount && (
                    <div className="discount">
                        {product.discount}% OFF
                    </div>
                )}

               
                <div className="stock">
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </div>

            </Link>

            <button
                className="add-cart-btn"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import products from "../data/products";
import "./ProductDetails.css";


function ProductDetails({ addToCart }) {

    const { id } = useParams();

    const navigate = useNavigate();



    const product = products.find(
        (item) =>
            String(item.id) === String(id)
    );



    const images =
        product?.images?.length
            ? product.images
            : product?.image
                ? [product.image]
                : [];



    const [selectedImage, setSelectedImage] =
        useState(images[0] || "");


    const [quantity, setQuantity] =
        useState(1);


    const [selectedColor, setSelectedColor] =
        useState(
            product?.variants?.colors?.[0] || ""
        );


    const [selectedSize, setSelectedSize] =
        useState(
            product?.variants?.sizes?.[0] || ""
        );



    if (!product) {

        return (

            <div className="product-not-found">

                <h2>
                    Product not found
                </h2>

                <button
                    onClick={() =>
                        navigate("/products")
                    }
                >
                    Back to Products
                </button>

            </div>

        );

    }



    const stock =
        Number(product.stock) > 0
            ? Number(product.stock)
            : 10;


    const increaseQuantity = () => {

        setQuantity((current) => {

            if (current < stock) {

                return current + 1;

            }

            return current;

        });

    };



    const decreaseQuantity = () => {

        setQuantity((current) => {

            if (current > 1) {

                return current - 1;

            }

            return 1;

        });

    };


    const handleAddToCart = () => {

        const productToAdd = {

            ...product,

            selectedColor:
                selectedColor,

            selectedSize:
                selectedSize,

            quantity:
                Number(quantity)

        };


        console.log(
            "PRODUCT DETAILS - ADD TO CART:",
            productToAdd.quantity
        );


        addToCart(productToAdd);


        alert(
            `${quantity} item(s) added to cart!`
        );

    };



    const handleBuyNow = () => {

        const productToBuy = {

            ...product,

            selectedColor:
                selectedColor,

            selectedSize:
                selectedSize,

            quantity:
                Number(quantity)

        };


        console.log(
            "PRODUCT DETAILS - BUY NOW:",
            productToBuy.quantity
        );



        navigate("/checkout", {

            state: {
                buyNowItem: productToBuy
            }

        });

    };


    const displayValue = (value) => {

        if (
            value === null ||
            value === undefined
        ) {
            return "-";
        }


        if (
            typeof value === "object"
        ) {

            if (
                Array.isArray(value)
            ) {

                return value.join(", ");

            }


            return (
                value.name ||
                value.value ||
                value.rating ||
                JSON.stringify(value)
            );

        }


        return value;

    };


    let rating = "4.3";

    if (
        typeof product.ratings === "object" &&
        product.ratings !== null
    ) {

        rating =
            product.ratings.rating ||
            product.ratings.value ||
            "4.3";

    }
    else if (product.ratings) {

        rating =
            product.ratings;

    }

    const reviews =
        Array.isArray(product.reviews)
            ? product.reviews
            : [];



    let seller = "ShopKart";


    if (product.seller) {

        if (
            typeof product.seller === "object"
        ) {

            seller =
                product.seller.name ||
                product.seller.storeName ||
                "ShopKart";

        }
        else {

            seller =
                product.seller;

        }

    }


    return (

        <div className="product-details-page">



            <div className="breadcrumb">

                <span
                    onClick={() =>
                        navigate("/")
                    }
                >
                    Home
                </span>

                <span>
                    ›
                </span>

                <span
                    onClick={() =>
                        navigate("/products")
                    }
                >
                    Products
                </span>

                <span>
                    ›
                </span>

                <span className="breadcrumb-current">

                    {product.name}

                </span>

            </div>



            <div className="product-main-container">



                <div className="product-gallery">


                    <div className="thumbnail-list">

                        {images.map(
                            (image, index) => (

                                <button
                                    key={index}
                                    className={
                                        selectedImage === image
                                            ? "thumbnail active"
                                            : "thumbnail"
                                    }
                                    onClick={() =>
                                        setSelectedImage(
                                            image
                                        )
                                    }
                                >

                                    <img
                                        src={image}
                                        alt={
                                            `${product.name} ${index + 1}`
                                        }
                                    />

                                </button>

                            )
                        )}

                    </div>


                    <div className="main-image-container">

                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="main-product-image"
                        />

                    </div>

                </div>




                <div className="product-information">


                    <h1 className="detail-product-title">

                        {product.name}

                    </h1>


                    <div className="detail-brand">

                        Brand:

                        <strong>
                            {" "}
                            {displayValue(
                                product.brand
                            )}
                        </strong>

                    </div>


                    <div className="detail-rating">

                        <span className="rating-box">

                            {rating} ★

                        </span>

                        <span className="review-link">

                            {reviews.length}
                            {" "}
                            Ratings & Reviews

                        </span>

                    </div>


                    <hr />


                    <div className="price-title">

                        Deal Price

                    </div>


                    <div className="detail-price-row">

                        <span className="detail-price">

                            ₹
                            {Number(
                                product.price || 0
                            ).toLocaleString(
                                "en-IN"
                            )}

                        </span>


                        {product.originalPrice && (

                            <span className="detail-original-price">

                                ₹
                                {Number(
                                    product.originalPrice
                                ).toLocaleString(
                                    "en-IN"
                                )}

                            </span>

                        )}


                        {product.discount && (

                            <span className="detail-discount">

                                {displayValue(
                                    product.discount
                                )}
                                % off

                            </span>

                        )}

                    </div>


                    <div className="tax-text">

                        Inclusive of all taxes

                    </div>



                   

                    <div className="offers-section">

                        <h3>
                            Offers
                        </h3>


                        <div className="offer-item">

                            <span className="offer-icon">
                                %
                            </span>

                            <div>

                                <strong>
                                    Special Price
                                </strong>

                                <p>
                                    Get extra discount on this product.
                                </p>

                            </div>

                        </div>


                        <div className="offer-item">

                            <span className="offer-icon">
                                ✓
                            </span>

                            <div>

                                <strong>
                                    Bank Offer
                                </strong>

                                <p>
                                    Get additional savings with selected bank cards.
                                </p>

                            </div>

                        </div>


                        <div className="offer-item">

                            <span className="offer-icon">
                                🚚
                            </span>

                            <div>

                                <strong>
                                    Free Delivery
                                </strong>

                                <p>
                                    Free delivery available on this product.
                                </p>

                            </div>

                        </div>

                    </div>



                   

                    {product.variants?.colors?.length > 0 && (

                        <div className="highlights-section">

                            <h3>

                                Color: {selectedColor}

                            </h3>


                            {product.variants.colors.map(
                                (color, index) => (

                                    <button
                                        key={index}
                                        onClick={() =>
                                            setSelectedColor(
                                                color
                                            )
                                        }
                                        style={{
                                            marginRight: "8px",
                                            padding: "8px 14px"
                                        }}
                                    >

                                        {displayValue(
                                            color
                                        )}

                                    </button>

                                )
                            )}

                        </div>

                    )}




                    {product.variants?.sizes?.length > 0 && (

                        <div className="highlights-section">

                            <h3>

                                Size: {selectedSize}

                            </h3>


                            {product.variants.sizes.map(
                                (size, index) => (

                                    <button
                                        key={index}
                                        onClick={() =>
                                            setSelectedSize(
                                                size
                                            )
                                        }
                                        style={{
                                            marginRight: "8px",
                                            padding: "8px 14px"
                                        }}
                                    >

                                        {displayValue(
                                            size
                                        )}

                                    </button>

                                )
                            )}

                        </div>

                    )}



                  

                    <div className="highlights-section">

                        <h3>
                            About this item
                        </h3>


                        <ul>

                            <li>
                                Premium quality product
                            </li>

                            <li>
                                Designed for everyday use
                            </li>

                            <li>
                                Comfortable and durable
                            </li>

                            <li>
                                High-quality materials
                            </li>

                            <li>
                                Perfect choice for your needs
                            </li>

                        </ul>

                    </div>




                    <div className="description-section">

                        <h3>
                            Product Description
                        </h3>


                        <p>

                            {displayValue(
                                product.description ||
                                "High-quality product designed for everyday use."
                            )}

                        </p>

                    </div>



              

                    {product.specifications && (

                        <div className="specifications-section">

                            <h3>
                                Product Details
                            </h3>


                            <div className="specifications-table">

                                {Object.entries(
                                    product.specifications
                                ).map(
                                    ([key, value]) => (

                                        <div
                                            className="specification-row"
                                            key={key}
                                        >

                                            <div className="specification-name">

                                                {key}

                                            </div>


                                            <div className="specification-value">

                                                {displayValue(
                                                    value
                                                )}

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}

                </div>




                <div className="buy-box">


                    <div className="buy-box-price">

                        ₹
                        {Number(
                            product.price || 0
                        ).toLocaleString(
                            "en-IN"
                        )}

                    </div>


                    <div className="buy-box-tax">

                        Inclusive of all taxes

                    </div>


                    <div className="delivery-info">

                        <strong>
                            FREE delivery
                        </strong>

                        <p>
                            Delivery available to your location
                        </p>

                    </div>


                    <div className="stock-status">

                        {stock > 0
                            ? "In Stock"
                            : "Out of Stock"}

                    </div>


                    <div className="sold-info">

                        Sold by{" "}

                        <strong>
                            {seller}
                        </strong>

                    </div>



                    

                    <div className="quantity-title">

                        Quantity:

                    </div>


                    <div className="quantity-selector">

                        <button
                            onClick={
                                decreaseQuantity
                            }
                        >
                            −
                        </button>


                        <span>

                            {quantity}

                        </span>


                        <button
                            onClick={
                                increaseQuantity
                            }
                        >
                            +

                        </button>

                    </div>



              

                    <button
                        className="buy-box-cart"
                        onClick={
                            handleAddToCart
                        }
                        disabled={
                            stock <= 0
                        }
                    >

                        Add to Cart

                    </button>




                    <button
                        className="buy-now-button"
                        onClick={
                            handleBuyNow
                        }
                        disabled={
                            stock <= 0
                        }
                    >

                        Buy Now

                    </button>


                    <div className="secure-payment">

                        🔒 Secure transaction

                    </div>


                    <div className="warranty-info">

                        <strong>
                            Warranty:
                        </strong>

                        <p>

                            {displayValue(
                                product.warranty ||
                                "Manufacturer warranty applicable"
                            )}

                        </p>

                    </div>


                    <div className="return-info">

                        <strong>
                            Returns:
                        </strong>

                        <p>
                            Easy returns available on eligible products.
                        </p>

                    </div>

                </div>

            </div>



            

            <div className="bottom-product-section">

                <section className="reviews-section">

                    <h2>
                        Customer Reviews
                    </h2>


                    <div className="overall-rating">

                        <span className="big-rating">

                            {rating}

                        </span>


                        <span className="big-stars">

                            ★★★★★

                        </span>

                    </div>


                    {reviews.length > 0
                        ? reviews.map(
                            (review, index) => (

                                <div
                                    className="customer-review"
                                    key={index}
                                >

                                    <strong>

                                        {typeof review === "object"
                                            ? review.name ||
                                              "Customer"
                                            : "Customer"}

                                    </strong>


                                    {typeof review === "object" &&
                                        review.rating && (

                                            <div>

                                                {"★".repeat(
                                                    Number(
                                                        review.rating
                                                    )
                                                )}

                                            </div>

                                        )}


                                    {typeof review === "object" &&
                                        review.verified && (

                                            <p>
                                                ✓ Verified Purchase
                                            </p>

                                        )}


                                    {typeof review === "object" &&
                                        (
                                            review.comment ||
                                            review.text
                                        ) && (

                                            <p>

                                                {review.comment ||
                                                    review.text}

                                            </p>

                                        )}

                                </div>

                            )
                        )
                        : (
                            <p>
                                No customer reviews available yet.
                            </p>
                        )}

                </section>

            </div>

        </div>

    );

}


export default ProductDetails;
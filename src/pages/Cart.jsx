import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {

    const navigate = useNavigate();


    const increaseQuantity = (id) => {

        setCart((previousCart) => {

            return previousCart.map((item) => {

                if (String(item.id) === String(id)) {

                    const currentQuantity =
                        Number(item.quantity) || 1;

                    const stock =
                        Number(item.stock) || 999;

                    if (currentQuantity < stock) {

                        return {
                            ...item,
                            quantity: currentQuantity + 1
                        };

                    }

                }

                return item;

            });

        });

    };



    const decreaseQuantity = (id) => {

        setCart((previousCart) => {

            return previousCart.map((item) => {

                if (String(item.id) === String(id)) {

                    const currentQuantity =
                        Number(item.quantity) || 1;

                    if (currentQuantity > 1) {

                        return {
                            ...item,
                            quantity: currentQuantity - 1
                        };

                    }

                }

                return item;

            });

        });

    };



    const removeItem = (id) => {

        setCart((previousCart) =>
            previousCart.filter(
                (item) =>
                    String(item.id) !== String(id)
            )
        );

    };



    const totalItems = cart.reduce(
        (total, item) =>
            total + (Number(item.quantity) || 1),
        0
    );



    const subtotal = cart.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
            (Number(item.quantity) || 1),
        0
    );



    if (!cart || cart.length === 0) {

        return (

            <div className="empty-cart-page">

                <div className="empty-cart-box">

                    <h1>
                        Your Shopping Cart is empty
                    </h1>

                    <p>
                        You have no items in your cart.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/products")
                        }
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>

        );

    }


    return (

        <div className="amazon-cart-page">


            <div className="cart-left-section">

                <div className="cart-heading-row">

                    <h1>
                        Shopping Cart
                    </h1>

                    <span>
                        Price
                    </span>

                </div>


                <div className="cart-items-container">

                    {cart.map((item) => {

                        const quantity =
                            Number(item.quantity) || 1;

                        const price =
                            Number(item.price) || 0;

                        const itemTotal =
                            price * quantity;

                        const image =
                            item.images?.[0] ||
                            item.image ||
                            "";

                        return (

                            <div
                                className="amazon-cart-item"
                                key={item.id}
                            >


                                <div className="amazon-cart-image">

                                    <img
                                        src={image}
                                        alt={item.name}
                                    />

                                </div>


                             

                                <div className="amazon-cart-details">

                                    <h2>
                                        {item.name}
                                    </h2>


                                    {item.brand && (

                                        <p className="amazon-brand">
                                            {item.brand}
                                        </p>

                                    )}


                                    <p className="amazon-stock">
                                        {Number(item.stock) > 0
                                            ? "In stock"
                                            : "Out of stock"}
                                    </p>


                                    <p className="amazon-delivery">
                                        FREE Delivery available
                                    </p>


                                

                                    {item.selectedColor && (

                                        <p className="selected-option">
                                            <strong>
                                                Color:
                                            </strong>{" "}
                                            {item.selectedColor}
                                        </p>

                                    )}


                              

                                    {item.selectedSize && (

                                        <p className="selected-option">
                                            <strong>
                                                Size:
                                            </strong>{" "}
                                            {item.selectedSize}
                                        </p>

                                    )}


                                  

                                    <div className="cart-actions">

                                        <div className="cart-quantity-box">

                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(
                                                        item.id
                                                    )
                                                }
                                            >
                                                −
                                            </button>


                                            <span>
                                                {quantity}
                                            </span>


                                            <button
                                                onClick={() =>
                                                    increaseQuantity(
                                                        item.id
                                                    )
                                                }
                                            >
                                                +
                                            </button>

                                        </div>


                                        <span className="action-divider">
                                            |
                                        </span>


                                        <button
                                            className="text-action"
                                            onClick={() =>
                                                removeItem(item.id)
                                            }
                                        >
                                            Delete
                                        </button>


                                        <span className="action-divider">
                                            |
                                        </span>


                                        <button
                                            className="text-action"
                                            onClick={() =>
                                                alert(
                                                    "Save for later feature"
                                                )
                                            }
                                        >
                                            Save for later
                                        </button>


                                        <span className="action-divider">
                                            |
                                        </span>


                                        <button
                                            className="text-action"
                                            onClick={() =>
                                                alert(
                                                    "Share feature"
                                                )
                                            }
                                        >
                                            Share
                                        </button>

                                    </div>

                                </div>


                               

                                <div className="amazon-item-price">

                                    <strong>
                                        ₹
                                        {itemTotal.toLocaleString(
                                            "en-IN"
                                        )}
                                    </strong>

                                </div>

                            </div>

                        );

                    })}

                </div>



                <div className="cart-bottom-note">

                    <p>
                        The price and availability of items in your
                        cart may change. Your shopping cart is a
                        temporary place to store your items.
                    </p>

                </div>

            </div>



            <aside className="amazon-cart-summary">

                <div className="free-delivery-message">

                    ✓ Your order is eligible for FREE Delivery.

                    <span>
                        Choose FREE Delivery option at checkout.
                    </span>

                </div>


                <h2>
                    Cart Summary
                </h2>


                <div className="summary-subtotal">

                    <span>
                        Subtotal ({totalItems} items):
                    </span>

                    <strong>
                        ₹
                        {subtotal.toLocaleString("en-IN")}
                    </strong>

                </div>


                <label className="gift-option">

                    <input
                        type="checkbox"
                    />

                    <span>
                        This order contains a gift
                    </span>

                </label>


                <button
                    className="proceed-buy-button"
                    onClick={() =>
                        navigate("/checkout")
                    }
                >
                    Proceed to Buy
                </button>


                <div className="emi-box">

                    <strong>
                        EMI Available
                    </strong>

                    <span>
                        ˅
                    </span>

                </div>

            </aside>

        </div>

    );

}

export default Cart;
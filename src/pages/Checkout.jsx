import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Checkout.css";


function Checkout({ cart }) {

    const navigate = useNavigate();

    const location = useLocation();



    const buyNowItem =
        location.state?.buyNowItem || null;



    const checkoutItems =
        buyNowItem
            ? [buyNowItem]
            : cart;



    const [paymentMethod, setPaymentMethod] =
        useState("upi");


    const [orderPlaced, setOrderPlaced] =
        useState(false);



    const subtotal =
        checkoutItems.reduce(
            (total, item) => {

                return (
                    total +
                    Number(item.price || 0) *
                    (Number(item.quantity) || 1)
                );

            },
            0
        );


    const delivery = 0;

    const total =
        subtotal + delivery;


    const handlePlaceOrder = () => {

        setOrderPlaced(true);

    };



    if (orderPlaced) {

        return (

            <div className="order-success">

                <div className="success-box">

                    <div className="success-icon">
                        ✓
                    </div>


                    <h1>
                        Order Placed Successfully!
                    </h1>


                    <p>
                        Thank you for shopping with ShopKart.
                    </p>


                    <p>
                        Your order has been confirmed.
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


    if (checkoutItems.length === 0) {

        return (

            <div className="empty-cart">

                <h2>
                    No items to checkout
                </h2>


                <button
                    onClick={() =>
                        navigate("/products")
                    }
                >
                    Continue Shopping
                </button>

            </div>

        );

    }


    return (

        <div className="checkout-page">



            <div className="checkout-header">

                <h1>
                    ShopKart
                </h1>


                <span>
                    Secure Checkout 🔒
                </span>

            </div>




            <div className="checkout-steps">

                <div className="checkout-step active">

                    <span>
                        1
                    </span>

                    Delivery

                </div>


                <div className="checkout-line"></div>


                <div className="checkout-step active">

                    <span>
                        2
                    </span>

                    Payment

                </div>


                <div className="checkout-line"></div>


                <div className="checkout-step active">

                    <span>
                        3
                    </span>

                    Place Order

                </div>

            </div>



            <div className="checkout-container">


              

                <div className="checkout-left">


                    

                    <section className="checkout-section">

                        <div className="section-number">
                            1
                        </div>


                        <div className="section-content">

                            <h2>
                                Delivery Address
                            </h2>


                            <div className="address-card">

                                <strong>
                                    Srivani
                                </strong>

                                <p>
                                    12-34, Main Road
                                </p>

                                <p>
                                    Hyderabad, Telangana
                                </p>

                                <p>
                                    India - 500001
                                </p>

                                <p>
                                    Mobile: 9876543210
                                </p>


                                <button>
                                    Change
                                </button>

                            </div>

                        </div>

                    </section>




                    <section className="checkout-section">

                        <div className="section-number">
                            2
                        </div>


                        <div className="section-content">

                            <h2>
                                Payment Method
                            </h2>


                            <div className="payment-options">


                             

                                <label
                                    className={
                                        paymentMethod === "upi"
                                            ? "payment-option selected"
                                            : "payment-option"
                                    }
                                >

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="upi"
                                        checked={
                                            paymentMethod === "upi"
                                        }
                                        onChange={(e) =>
                                            setPaymentMethod(
                                                e.target.value
                                            )
                                        }
                                    />


                                    <div>

                                        <strong>
                                            UPI
                                        </strong>

                                        <p>
                                            Google Pay, PhonePe, Paytm and other UPI apps
                                        </p>

                                    </div>

                                </label>



                            

                                <label
                                    className={
                                        paymentMethod === "card"
                                            ? "payment-option selected"
                                            : "payment-option"
                                    }
                                >

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={
                                            paymentMethod === "card"
                                        }
                                        onChange={(e) =>
                                            setPaymentMethod(
                                                e.target.value
                                            )
                                        }
                                    />


                                    <div>

                                        <strong>
                                            Credit / Debit Card
                                        </strong>

                                        <p>
                                            Visa, Mastercard, RuPay
                                        </p>

                                    </div>

                                </label>



                               

                                <label
                                    className={
                                        paymentMethod === "netbanking"
                                            ? "payment-option selected"
                                            : "payment-option"
                                    }
                                >

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="netbanking"
                                        checked={
                                            paymentMethod ===
                                            "netbanking"
                                        }
                                        onChange={(e) =>
                                            setPaymentMethod(
                                                e.target.value
                                            )
                                        }
                                    />


                                    <div>

                                        <strong>
                                            Net Banking
                                        </strong>

                                        <p>
                                            Pay using your bank account
                                        </p>

                                    </div>

                                </label>



                           

                                <label
                                    className={
                                        paymentMethod === "cod"
                                            ? "payment-option selected"
                                            : "payment-option"
                                    }
                                >

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={
                                            paymentMethod === "cod"
                                        }
                                        onChange={(e) =>
                                            setPaymentMethod(
                                                e.target.value
                                            )
                                        }
                                    />


                                    <div>

                                        <strong>
                                            Cash on Delivery
                                        </strong>

                                        <p>
                                            Pay when your order is delivered
                                        </p>

                                    </div>

                                </label>

                            </div>



                          

                            {paymentMethod === "upi" && (

                                <div className="payment-form">

                                    <h3>
                                        Enter UPI ID
                                    </h3>

                                    <input
                                        type="text"
                                        placeholder="example@upi"
                                    />

                                </div>

                            )}



                   

                            {paymentMethod === "card" && (

                                <div className="payment-form">

                                    <h3>
                                        Card Details
                                    </h3>

                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                    />


                                    <div className="card-row">

                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                        />


                                        <input
                                            type="text"
                                            placeholder="CVV"
                                        />

                                    </div>

                                </div>

                            )}

                        </div>

                    </section>




                    <section className="checkout-section">

                        <div className="section-number">
                            3
                        </div>


                        <div className="section-content">

                            <h2>
                                Review Your Order
                            </h2>


                            {checkoutItems.map(
                                (item, index) => (

                                    <div
                                        className="checkout-product"
                                        key={
                                            `${item.id}-${index}`
                                        }
                                    >

                                        <img
                                            src={
                                                item.images?.[0] ||
                                                item.image
                                            }
                                            alt={item.name}
                                        />


                                        <div>

                                            <strong>
                                                {item.name}
                                            </strong>


                                            <p>

                                                Quantity:{" "}

                                                {Number(
                                                    item.quantity
                                                ) || 1}

                                            </p>


                                            <p>

                                                ₹
                                                {(
                                                    Number(
                                                        item.price || 0
                                                    ) *
                                                    (
                                                        Number(
                                                            item.quantity
                                                        ) || 1
                                                    )
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}

                                            </p>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </section>

                </div>



                

                <div className="checkout-summary">

                    <h2>
                        Order Summary
                    </h2>


                    <div className="summary-line">

                        <span>
                            Items
                        </span>


                        <span>

                            {checkoutItems.reduce(
                                (total, item) =>
                                    total +
                                    (
                                        Number(
                                            item.quantity
                                        ) || 1
                                    ),
                                0
                            )}

                        </span>

                    </div>


                    <div className="summary-line">

                        <span>
                            Product Total
                        </span>


                        <span>

                            ₹
                            {subtotal.toLocaleString(
                                "en-IN"
                            )}

                        </span>

                    </div>


                    <div className="summary-line">

                        <span>
                            Delivery
                        </span>


                        <span className="free">
                            FREE
                        </span>

                    </div>


                    <hr />


                    <div className="final-total">

                        <span>
                            Order Total
                        </span>


                        <strong>

                            ₹
                            {total.toLocaleString(
                                "en-IN"
                            )}

                        </strong>

                    </div>


                    <button
                        className="place-order-button"
                        onClick={
                            handlePlaceOrder
                        }
                    >

                        Place Your Order

                    </button>


                    <p className="secure-text">

                        🔒 Secure encrypted checkout

                    </p>

                </div>

            </div>

        </div>

    );

}


export default Checkout;
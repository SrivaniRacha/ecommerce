import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {

    const [cart, setCart] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");



    const addToCart = (product) => {

        const quantityToAdd =
            Number(product.quantity) || 1;


        console.log(
            "APP - Quantity received:",
            quantityToAdd
        );


        setCart((previousCart) => {

            const existingProduct =
                previousCart.find(
                    (item) =>
                        String(item.id) ===
                        String(product.id)
                );


            
            if (existingProduct) {

                return previousCart.map((item) => {

                    if (
                        String(item.id) ===
                        String(product.id)
                    ) {

                        return {
                            ...item,

                            quantity:
                                (Number(item.quantity) || 0) +
                                quantityToAdd
                        };

                    }

                    return item;

                });

            }


            return [

                ...previousCart,

                {
                    ...product,

                    quantity:
                        quantityToAdd
                }

            ];

        });

    };



    const cartCount = cart.reduce(
        (total, item) =>
            total +
            (Number(item.quantity) || 0),
        0
    );


    return (

        <BrowserRouter>

            <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                cartCount={cartCount}
            />


            <Routes>


                

                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />


            

                <Route
                    path="/products"
                    element={
                        <Products
                            addToCart={addToCart}
                            searchTerm={searchTerm}
                        />
                    }
                />


                

                <Route
                    path="/product/:id"
                    element={
                        <ProductDetails
                            addToCart={addToCart}
                        />
                    }
                />



                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            setCart={setCart}
                        />
                    }
                />


                

                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cart={cart}
                        />
                    }
                />


            </Routes>

        </BrowserRouter>

    );

}


export default App;
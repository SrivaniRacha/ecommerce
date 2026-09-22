import { useState } from "react";
import "./Products.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart, searchTerm }) {

    const [selectedCategory, setSelectedCategory] = useState("All");

   
    const categories = [
        "All",
        ...new Set(
            products.map((product) => product.category)
        )
    ];

    
    const searchedProducts = products.filter((product) => {

        const search = searchTerm
            .toLowerCase()
            .trim();

        
        if (!search) {
            return true;
        }

      
        const searchableText = [

            product.name,

            product.brand,

            product.category,

            product.subCategory,

            product.shortDescription,

            product.description,

            ...(product.tags || [])

        ]
            .join(" ")
            .toLowerCase();

       
        const searchWords = search.split(/\s+/);

        return searchWords.every((word) =>
            searchableText.includes(word)
        );
    });

   
    const filteredProducts =
        selectedCategory === "All"
            ? searchedProducts
            : searchedProducts.filter(
                (product) =>
                    product.category === selectedCategory
            );

    return (
        <div className="products-page">

         

            <div className="products-header">

                <h1>
                    {searchTerm
                        ? `Search results for "${searchTerm}"`
                        : "All Products"
                    }
                </h1>

                <p>
                    {filteredProducts.length} product(s) found
                </p>

            </div>


           

            <div className="category-filter">

                {categories.map((category) => (

                    <button
                        key={category}
                        onClick={() =>
                            setSelectedCategory(category)
                        }
                        className={
                            selectedCategory === category
                                ? "active"
                                : ""
                        }
                    >
                        {category}
                    </button>

                ))}

            </div>


            

            {filteredProducts.length === 0 ? (

                <div className="no-products">

                    <h2>
                        No products found
                    </h2>

                    <p>
                        Try searching for another product.
                    </p>

                </div>

            ) : (

                <div className="products-grid">

                    {filteredProducts.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />

                    ))}

                </div>

            )}

        </div>
    );
}

export default Products;

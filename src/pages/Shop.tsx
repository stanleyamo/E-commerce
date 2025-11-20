import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../data/types";

const categories = ["All", "African Wear", "Imported Clothes", "Perfumes"];

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(
                `http://localhost:5000/api/products${selectedCategory !== "All" ? "/category/" + selectedCategory : ""}`
            );
            setProducts(res.data);
        };
        fetchProducts();
    }, [selectedCategory]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Shop Our Collection</h1>

            {/* Category Filter */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg border ${selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 hover:bg-blue-100"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No products found in this category.</p>
            )}
        </div>
    );
}

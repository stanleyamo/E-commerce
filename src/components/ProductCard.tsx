import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { CartItem } from "../context/CartContext";
import type { Product } from "../data/types";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Props {
    product: Product;
}

export function ProductCard({ product }: Props) {
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || "");
    const [quantity, setQuantity] = useState<number>(1);
    const [showDescription, setShowDescription] = useState(false);

    // Calculate price based on selected size
    const sizePrice = product.sizePrice?.[selectedSize] || 0;
    const totalPrice = product.price + sizePrice;

    const handleAddToCart = () => {
        const item: CartItem = {
            ...product,
            size: selectedSize,
            quantity,
            price: totalPrice,
        };
        addToCart(item);
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform">
            {/* Image Carousel */}
            {product.images && product.images.length > 0 && (
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    className="w-full h-48 rounded-xl mb-2"
                >
                    {product.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>

            {/* Price */}
            <p className="mt-1 font-bold text-blue-600">GHC {totalPrice}</p>

            {/* Toggle Description */}
            {product.description && (
                <>
                    <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="text-sm text-gray-500 underline mt-1"
                    >
                        {showDescription ? "Hide Details" : "View Details"}
                    </button>
                    {showDescription && <p className="text-gray-700 mt-1">{product.description}</p>}
                </>
            )}

            {/* Sizes */}
            {product.sizes && (
                <div className="mt-2 flex gap-2">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            className={`px-2 py-1 border rounded ${selectedSize === size
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700"
                                }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-2 flex items-center gap-2">
                <button
                    className="px-2 py-1 border rounded"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                    className="px-2 py-1 border rounded"
                    onClick={() => setQuantity((q) => q + 1)}
                >
                    +
                </button>
            </div>

            {/* Add to Cart */}
            <button
                onClick={handleAddToCart}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
                Add to Cart
            </button>
        </div>
    );
}

import { Link } from "react-router-dom";
import type { Product } from "../data/types";
import { useCart } from "../context/CartContext";

interface Props { product: Product; }

export function ProductCard({ product }: Props) {
    const { addToCart } = useCart();

    return (
        <div className="relative bg-white shadow-lg rounded-2xl p-4 overflow-hidden hover:shadow-xl transition">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
                <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.category}</p>
                <p className="mt-1 font-bold text-blue-600">GHC {product.price}</p>
            </Link>
            <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg opacity-0 hover:opacity-100 transition"
            >
                Add to Cart
            </button>
        </div>
    );
}

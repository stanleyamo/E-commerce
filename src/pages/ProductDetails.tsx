import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));
    const { addToCart } = useCart();

    if (!product) return <div className="text-center mt-20">Product not found. <Link to="/">Go back</Link></div>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <Link to="/" className="text-blue-600 underline">&larr; Back</Link>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
                <img src={product.image} alt={product.name} className="rounded-2xl w-full h-96 object-cover shadow-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 mt-2">{product.category}</p>
                    <p className="text-2xl font-semibold mt-4 text-blue-700">GHC {product.price}</p>
                    <button onClick={() => addToCart(product)}
                        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

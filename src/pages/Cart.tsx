import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    // Total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="text-center mt-20 text-lg">
                Your cart is empty.{" "}
                <Link to="/" className="text-blue-600 underline">
                    Shop now
                </Link>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {cart.map((item, idx) => (
                <div
                    key={idx}
                    className="flex justify-between items-center mb-4 border-b pb-3"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={item.image}
                            className="w-20 h-20 rounded-lg object-cover"
                            alt={item.name}
                        />
                        <div>
                            <h2 className="font-semibold">{item.name}</h2>
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                            <p className="text-blue-600">GHC {item.price}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-600 hover:underline"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <div className="text-right mt-4">
                <h2 className="text-xl font-semibold">Total: GHC {total}</h2>
                <div className="mt-4 flex justify-end gap-3">
                    <button
                        onClick={clearCart}
                        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                        Clear Cart
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}      
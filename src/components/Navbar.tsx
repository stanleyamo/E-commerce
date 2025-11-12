import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const categories = ["African Wear", "Imported Clothes", "Perfumes"];

export default function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="bg-white shadow-md flex justify-between items-center p-4 sticky top-0 z-50">
            <Link to="/" className="text-2xl font-bold text-orange-600">MyShop</Link>

            <div className="hidden md:flex gap-4">
                {categories.map((cat) => (
                    <Link key={cat} to={`/shop?category=${cat}`} className="hover:text-orange-600">
                        {cat}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <input type="text" placeholder="Search..." className="border p-2 rounded-md" />
                <Link to="/cart" className="relative">
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21h4" />
                    </svg>
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

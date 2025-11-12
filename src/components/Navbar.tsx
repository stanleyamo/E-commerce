import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkStyle =
        "text-gray-700 hover:text-blue-600 font-medium transition";

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
                MyShop
            </Link>

            <div className="flex gap-6">
                <NavLink to="/" className={navLinkStyle}>
                    Home
                </NavLink>
                <NavLink to="/shop" className={navLinkStyle}>
                    Shop
                </NavLink>
                <NavLink to="/cart" className={navLinkStyle}>
                    Cart
                </NavLink>
                <NavLink to="/login" className={navLinkStyle}>
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

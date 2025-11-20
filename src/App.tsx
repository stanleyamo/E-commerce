import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />

                {/* Admin route protected */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute adminOnly={true}>
                            <Admin />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;

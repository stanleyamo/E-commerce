import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("adminToken", res.data.token);
            navigate("/admin");
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto mt-20 space-y-4">
            <h1 className="text-3xl font-bold">Admin Login</h1>
            {error && <p className="text-red-600">{error}</p>}
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full" />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full" />
            <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full">Login</button>
        </div>
    );
}

import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            // Save user & token
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Logged in!");

            window.location.href = "/";
        } catch (err) {
            alert("Login failed.");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto space-y-4">
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full"
            />

            <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                Login
            </button>

            <p className="text-center">
                Don’t have an account? <a href="/register" className="text-blue-600">Register</a>
            </p>
        </div>
    );
}

import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:5000/api/auth/register", { email, password });
            alert("Account created! You can now login.");
            window.location.href = "/login";
        } catch (err) {
            alert("Registration failed.");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto space-y-4">
            <h1 className="text-2xl font-bold text-center">Create Account</h1>

            <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={handleRegister}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                Register
            </button>
        </div>
    );
}

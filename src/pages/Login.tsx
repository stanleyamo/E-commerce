const Login = () => {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded-md"
                />
                <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

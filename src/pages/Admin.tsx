import { useState } from "react";
import axios from "axios";

export default function Admin() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("African Wear");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [sizes, setSizes] = useState("");

    const handleAddProduct = async () => {
        const product = {
            name,
            category,
            price,
            image,
            description,
            sizes: sizes.split(",").map(s => s.trim()) // trim spaces
        };

        try {
            await axios.post("http://localhost:5000/api/products", product);
            alert("Product added!");
            // reset fields after adding
            setName("");
            setCategory("African Wear");
            setPrice(0);
            setImage("");
            setDescription("");
            setSizes("");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                alert(err.response?.data?.message || "Error adding product");
            } else if (err instanceof Error) {
                alert(err.message);
            } else {
                alert("An unknown error occurred");
            }
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

            <input
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                placeholder="Price"
                type="number"
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className="border p-2 w-full"
            />
            <input
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                placeholder="Image URL"
                value={image}
                onChange={e => setImage(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                placeholder="Sizes (comma separated)"
                value={sizes}
                onChange={e => setSizes(e.target.value)}
                className="border p-2 w-full"
            />

            <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                Add Product
            </button>
        </div>
    );
}

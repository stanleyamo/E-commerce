import * as express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
    res.send("API is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

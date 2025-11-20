import * as express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// GET products by category
router.get("/category/:category", async (req, res) => {
    const { category } = req.params;
    const products = category === "All" ? await Product.find() : await Product.find({ category });
    res.json(products);
});

// POST new product (Admin only, later you can add auth middleware)
router.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: "Failed to add product", error: err });
    }
});

export default router;

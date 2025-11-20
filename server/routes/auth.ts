import * as express from "express";
import { User } from "../models/User.js";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const router = express.Router();

// Register (optional)
router.post("/register", async (req, res) => {
    const { email, password, isAdmin } = req.body;
    const user = new User({ email, password, isAdmin });
    await user.save();
    res.status(201).json({ message: "User created" });
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { email: user.email, isAdmin: user.isAdmin } });
});

export default router;

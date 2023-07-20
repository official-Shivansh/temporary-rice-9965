const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
userRouter.post("/register", async (req, res) => {
    const { password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({
                message: "User already exists, please login",
                auth: false,
            });
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.json({ err });
            } else {
                const user = new UserModel({ ...req.body, password: hash });
                await user.save();
                res.json({
                    message: "User has been Registered successfully",
                    auth: true,
                });
            }
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ message: "Email not found", auth: false });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.json({ message: "Incorrect Password", auth: false });
        }
        const token = jwt.sign({ userId: user._id, user: user.name }, process.env.secretKey, {
            expiresIn: "7d",
        });
        res.json({ message: "Login successful", token, user, auth: true });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
module.exports = {
    userRouter,
};

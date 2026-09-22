import { RequestHandler } from "express";

export const validateUser: RequestHandler = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || typeof name !== "string") {
        res.status(400).json({ message: "Name is required" });
        return;
    }

    if (!email || typeof email !== "string") {
        res.status(400).json({ message: "Valid email is required" });
        return;
    }

    next();
};

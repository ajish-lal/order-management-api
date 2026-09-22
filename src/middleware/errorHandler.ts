import { ErrorRequestHandler } from "express";
import { AppError } from "../errors/AppError.js";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            message: err.message
        });

        return;
    }

    res.status(500).json({
        message: "Internal server error"
    });
};

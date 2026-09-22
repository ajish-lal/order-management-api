import { RequestHandler } from "express";
import { NotFoundError } from "../errors/NotFoundError.js";

export const notFound: RequestHandler = (req, _res, next) => {
    next(new NotFoundError(`Route ${req.method} ${req.originalUrl} not found`));
};

import express from "express";
import userRoutes from "./modules/users/user.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
    res.json({
        status: "ok"
    });
});

app.use("/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;

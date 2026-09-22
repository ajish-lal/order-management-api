import { RequestHandler } from "express";
import { NotFoundError } from "../../errors/NotFoundError.js";
import { userService } from "./user.service.js";

export const userController = {
    createUser: (async (req, res) => {
        const { name, email } = req.body;
        const user = await userService.createUser(name, email);

        res.status(201).json(user);
    }) as RequestHandler,

    getUsers: (async (_req, res) => {
        const users = await userService.getUsers();

        res.json(users);
    }) as RequestHandler,

    getUserById: (async (req, res) => {
        const id = Number(req.params.id);
        const user = await userService.getUserById(id);

        if (!user) {
            throw new NotFoundError("User not found");
        }

        res.json(user);
    }) as RequestHandler
};

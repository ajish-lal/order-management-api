import { userRepository } from "./user.repository.js";

export const userService = {
    createUser: (name: string, email: string) => userRepository.create(name, email),
    getUsers: () => userRepository.findAll(),
    getUserById: (id: number) => userRepository.findById(id)
};

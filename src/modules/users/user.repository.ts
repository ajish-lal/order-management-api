import { pool } from "../../config/database.js";
import { ConflictError } from "../../errors/ConflictError.js";
import { User } from "./user.types.js";

export const userRepository = {
    async create(name: string, email: string): Promise<User> {
        try {
            const result = await pool.query<User>(
                `INSERT INTO users (name, email)
                 VALUES ($1, $2)
                 RETURNING id, name, email, created_at`,
                [name, email]
            );

            return result.rows[0];
        } catch (error: unknown) {
            if (isUniqueViolation(error)) {
                throw new ConflictError("Email already exists");
            }

            throw error;
        }
    },

    async findAll(): Promise<User[]> {
        const result = await pool.query<User>(
            `SELECT id, name, email, created_at
             FROM users
             ORDER BY id`
        );

        return result.rows;
    },

    async findById(id: number): Promise<User | undefined> {
        const result = await pool.query<User>(
            `SELECT id, name, email, created_at
             FROM users
             WHERE id = $1`,
            [id]
        );

        return result.rows[0];
    }
};

function isUniqueViolation(error: unknown): error is { code: string } {
    return typeof error === "object" && error !== null && "code" in error && error.code === "23505";
}

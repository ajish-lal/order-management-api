const parsePort = (value: string | undefined, fallback: number): number => {
    const port = Number(value);

    return Number.isInteger(port) && port > 0 ? port : fallback;
};

export const env = {
    port: parsePort(process.env.PORT, 3000),
    database: {
        user: process.env.DB_USER ?? "postgres",
        host: process.env.DB_HOST ?? "localhost",
        name: process.env.DB_NAME ?? "order_management",
        password: process.env.DB_PASSWORD ?? "password",
        port: parsePort(process.env.DB_PORT, 5432)
    }
};

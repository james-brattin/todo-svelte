import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
    url: process.env.DB_URL || '',
    authToken: process.env.AUTH_TOKEN
});

export async function getAllTodos() {
    try {
        const todos = await client.execute('SELECT * FROM todos');
        return todos.rows;
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
}
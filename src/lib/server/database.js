import { createClient } from "@libsql/client";

const client = createClient({
	url: process.env.DB_URL || '',
	authToken: process.env.AUTH_TOKEN || ''
})

export async function getAllTodos() {
	const todos = await client.execute('SELECT * FROM todos');
	return todos.rows;
}
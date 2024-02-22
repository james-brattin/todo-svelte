import * as database from '$lib/server/database.js';

export async function load() {
	return {
		todos: await database.getAllTodos()
	};
}
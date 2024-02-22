const database = new Map();

/**
 * 
 * @param {*} userid 
 */
export function getTodos(userid) {
  if (!database.has(userid)) {
    createTodo({ userid, description: 'Learn about API routes' });
  }

  return Array.from(database.get(userid).values());
}

/**
 * @param {*} param
 */
export function createTodo({ userid, description }) {
	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	const todos = database.get(userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	});

	return {
		id
	};
}

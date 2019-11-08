export function helloWorld(): string {
	return `Hello World!`;
}

export function echo(stringVal: string): string {
	return stringVal;
}

/**
 * @param user The user to be created in the db
 * @returns The created user with the id populated
 */
export async function createUser(user: User): Promise<User> {
	return new Promise((resolve) => {
		user.id = `1`;
		resolve(user);
	});
}

/**
 * This user _supports_ [Markdown](https://marked.js.org/)
 * @example
 * ```
 * const bob = { id:'1', firstName:'bob' }
 * ```
 */
export type User = {
	/** The unique identifier of the user */
	id?: string;
	/** The first name of the user */
	firstName: string;
};

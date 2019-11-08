/** @module Example */ /** */

import { User } from "./user";

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

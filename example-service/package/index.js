export function helloWorld() {
  return "Hello World!";
}

/**
 * @param {string} stringVal
 */
export function echo(stringVal) {
  return stringVal;
}

/**
 * @export
 * @param {import('./index').User} user
 * @returns {string}
 */
export function createUser(user) {
  return user.id;
}

export function helloWorld() {
  return "Hello World!";
}

export function echo(stringVal: string): string {
  return stringVal;
}

export function createUser(user: User): string {
  return user.id;
}

export type User = {
  /** The unique identifier of the user */
  id: string;
  /** The first name of the user */
  firstName: string;
};

export function helloWorld(): string {
	return `Hello World!`;
}

export function echo(stringVal: string): string {
	return stringVal;
}

export function createUser(user: User): string {
	const a: any = {
		d: 1,
		b: (d: any) => console.log(d),
	};
	a.bob = true;
	a[`b`] = 1;
	return user.id;
}

export type User = {
	/** The unique identifier of the user */
	id: string;
	/** The first name of the user */
	firstName: string;
};

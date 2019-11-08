/**
 * @module Example
 * @prefered
 *
 * This comment!
 *  */ /** and now?*/
export * from "./create-user";
export * from "./user";

/** Hey there! */
export function helloWorld(): string {
	return `Hello World!`;
}

export function echo(stringVal: string): string {
	return stringVal;
}

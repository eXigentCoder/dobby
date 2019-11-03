import { helloWorld } from "../src";

describe(`hello world`, () => {
	it(`should return hello world!`, () => {
		expect(helloWorld()).toEqual(`Hello World!`);
	});
});

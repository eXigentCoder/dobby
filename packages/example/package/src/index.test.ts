import { helloWorld } from "../src";

/**
 * @group unit
 */
describe(`hello world`, () => {
	it(`should return hello world!`, () => {
		expect(helloWorld()).toEqual(`Hello World!`);
	});
});

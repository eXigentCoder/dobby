import { TemplaterCore } from "../src";

describe(`templaterCore`, () => {
	describe(`with a simple template of "hello {{name}}!"`, () => {
		const template = `Hello {{name}}!`;

		it(`should return 'Hello bob!' `, () => {
			const templater = new TemplaterCore();

			const model = {
				name: `bob`,
			};

			const templatedString = templater.bind(template, model);

			expect(templatedString).toEqual(`Hello bob!`);
		});
	});
});

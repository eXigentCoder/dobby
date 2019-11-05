import { TemplaterCore, ValidationError } from "../src";

describe(`templaterCore`, () => {
	describe(`with a simple template of "hello {{name}}!"`, () => {
		const template = `Hello {{name}}!`;

		describe(`without a schema`, () => {
			it(`should return 'Hello bob!' `, () => {
				const templater = new TemplaterCore();

				const model = {
					name: `bob`,
				};

				const templatedString = templater.bind(template, model);

				expect(templatedString).toEqual(`Hello bob!`);
			});
		});

		describe(`with a schema`, () => {
			const schema = {
				definitions: {},
				$schema: `http://json-schema.org/draft-07/schema#`,
				$id: `http://example.com/root.json`,
				type: `object`,
				title: `The Root Schema`,
				required: [`name`, `age`],
				properties: {
					name: {
						$id: `#/properties/name`,
						type: `string`,
						title: `The Name Schema`,
						default: ``,
						examples: [`john`],
						pattern: `^(.*)$`,
					},
					age: {
						$id: `#/properties/age`,
						type: `integer`,
						title: `The Age Schema`,
						default: 0,
						examples: [30],
					},
				},
			};

			describe(`with a valid model`, () => {
				const model = {
					name: `John`,
					age: 41,
				};

				it(`should return 'Hello John!' `, () => {
					const templater = new TemplaterCore();

					const templatedString = templater.bind(template, model, schema);

					expect(templatedString).toEqual(`Hello John!`);
				});
			});

			describe(`with an invalid model`, () => {
				const model = {
					name: `John`,
					invoiceNumber: `ABC123`,
				};

				it(`should return 'Hello John!' `, () => {
					const templater = new TemplaterCore();
					const expectedError = new ValidationError(`data should have required property 'age'`, [
						{
							keyword: `required`,
							dataPath: ``,
							schemaPath: `#/required`,
							params: { missingProperty: `age` },
							message: `should have required property 'age'`,
						},
					]);

					expect(() => {
						templater.bind(template, model, schema);
					}).toThrow(expectedError);
				});
			});
		});
	});
});

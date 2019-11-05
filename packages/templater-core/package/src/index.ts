import * as handlebars from "handlebars";
import * as AJV from "ajv";

export class ValidationError extends Error {
	data: AJV.ErrorObject[];
	constructor(message: string, data: AJV.ErrorObject[]) {
		super(message);
		this.name = `ValidationError`;
		this.data = data;
	}
}

export class TemplaterCore {
	bind(template: string, model: object, schema?: object): string {
		if (schema) {
			const ajv = new AJV({ allErrors: true });
			const valid = ajv.validate(schema, model);
			if (!valid) {
				const errorMessage = ajv.errorsText();
				const errorData = ajv.errors || [];
				throw new ValidationError(errorMessage, errorData);
			}
		}

		return handlebars.compile(template)(model);
	}
}

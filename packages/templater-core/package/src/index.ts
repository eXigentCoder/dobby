import * as handlebars from "handlebars";
import * as AJV from "ajv";

const ajv = new AJV({ allErrors: true });

export type TemplateSchema = {
	/** The unique identifier of the schema as per JSON Schema draft 7 */
	$id: string;
};

export class TemplaterValidationError extends Error {
	data: AJV.ErrorObject[];
	constructor(message: string, data: AJV.ErrorObject[]) {
		super(message);
		this.name = `TemplaterValidationError`;
		this.data = data;
	}
}

function assertValidModel(model: object, schema: TemplateSchema): void {
	const schemaId = schema.$id;

	let validate = ajv.getSchema(schemaId);

	if (!validate) {
		// Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
		ajv.addSchema(schema, schemaId);
		validate = ajv.getSchema(schemaId);
	}

	const valid = validate(model);

	if (!valid) {
		const errorData = validate.errors || [];
		throw new TemplaterValidationError(`Validating schema '${schemaId}' failed`, errorData);
	}
}

export function bind(template: string, model: object, schema?: TemplateSchema): string {
	if (schema) {
		assertValidModel(model, schema);
	}

	return handlebars.compile(template)(model);
}

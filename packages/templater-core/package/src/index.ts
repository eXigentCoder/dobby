import * as handlebars from "handlebars";

export class TemplaterCore {
	bind(template: string, model: object, schema?: object): string {
		return handlebars.compile(template)(model);
	}
}

"use strict";

const TypeDoc = require(`typedoc`);

const app = new TypeDoc.Application({
	mode: `Modules`,
	out: `docs`,
	exclude: [`**/*+(test|.spec).ts`, `**/node_modules/*`],
	excludePrivate: true,
	skipInternal: true,
	readme: `./README.md`,
	name: `Dobby`,
	lernaExclude: [],
	//logger: `none`,
	target: `ES5`,
	module: `CommonJS`,
	experimentalDecorators: true,
});

const project = app.convert(app.expandInputFiles([`packages`]));

if (project) {
	// Project may not have converted correctly
	const outputDir = `docs`;

	// // Rendered docs
	// for (const [key, value] of Object.entries(project.reflections)) {
	// 	let shouldAdd = true;
	// 	if (value.name.indexOf(`/`) >= 0) {
	// 		shouldAdd = false;
	// 	}
	// 	if (!shouldAdd) {
	// 		delete project.reflections[key];
	// 	}
	// }
	app.generateDocs(project, outputDir);
}

module.exports = {
	mode: `modules`,
	theme: `default`,
	exclude: [`**/*+(test|.spec).ts`, `**/node_modules/*`],
	excludePrivate: true,
	excludeNotExported: true,
	excludeExternals: true,
	target: `ES5`,
	includeDeclarations: true,
	readme: `./README.md`,
	categorizeByGroup: true,
	name: `Dobby`,
};

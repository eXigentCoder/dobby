module.exports = {
	mode: `modules`,
	theme: `default`,
	exclude: [`**/*+(test|.spec).ts`],
	excludePrivate: true,
	excludeNotExported: true,
	excludeExternals: true,
	target: `ES5`,
	includeDeclarations: true,
};

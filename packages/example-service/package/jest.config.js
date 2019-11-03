module.exports = {
	...require(`../../jest.config`),
	coverageThreshold: {
		global: {
			statements: 40,
			branches: 100,
			functions: 25,
			lines: 40,
		},
	},
};

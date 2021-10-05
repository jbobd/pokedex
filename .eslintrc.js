module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["react", "@typescript-eslint", "prettier"],
	extends: [
		"airbnb-typescript",
		"airbnb/hooks",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		project: ["./tsconfig.json"], // Specify it only for TypeScript files
	},
	rules: {
		// Include .prettierrc.js rules
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		// We will use TypeScript's types for component props instead
		"react/prop-types": "off",
		// We don't want unused vars
		"@typescript-eslint/no-unused-vars": ["error"],
		"import/prefer-default-export": "off",
		"react/jsx-props-no-spreading": "off",
		"arrow-body-style": "off",
	},
}

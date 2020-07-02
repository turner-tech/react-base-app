module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        '@typescript-eslint/quotes': ['error'],
        // quotes: "off",
        quotes: [2, "single", { avoidEscape: true }],
        // 'jsx-quotes': [2, 'prefer-single'],
        // 'import/prefer-default-export': 'off',
    },
};

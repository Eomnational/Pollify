module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "react/jsx-runtime"
    ],
    "rules": {
       "prettier/prettier": "error",
       "arrow-body-style": "off",
      "prefer-arrow-callback": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}

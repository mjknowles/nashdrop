module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true,
        "jquery": true,
        "mongo": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "script"
    },
    "globals": {
        "angular": false
    },
    "rules": {
        "default-case": "warn",
        "eqeqeq": ["warn", "smart"],
        "indent": ["error", 2],
        "new-parens": "warn",
        "no-fallthrough": "warn",
        "no-magic-numbers": ["error", {"ignore": [-1, 0, 1, 2]}],
        "no-spaced-func": "warn",
        "no-unneeded-ternary": "warn",
        "no-whitespace-before-property": "error",
        "no-var": "warn",
        "prefer-const": "warn",
        "prefer-template": "warn",
        "quotes": ["warn", "double", {
          "avoidEscape": true,
          "allowTemplateLiterals": true
          }],
        "semi": ["error", "always"]
    }
};

# cardscript-expressions

[![Known Vulnerabilities](https://snyk.io/test/github/wmfs/cardscript/badge.svg?targetFile=packages%2Fcardscript-cleaner%2Fpackage.json)](https://snyk.io/test/github/wmfs/cardscript?targetFile=packages%2Fcardscript-doc-generator%2Fpackage.json)

> cardscript-expressions provides a number of utilities to generate expressions, generate AST's, and clean cardscript data for submissions

## <a name="install"></a>Install
```bash
$ npm install cardscript-expressions --save
```

## <a name="usage"></a>Usage
```bash
const expressions = new CardscriptExpressionsxpressions()
```

##### Method summary

| Usage      | Description |
| -----------      | ----------- |
| `const expressionList = getExpressionsFromCardscript(cardscript)` | Takes a cardscript schema and extracts a list of expressions. |
| `convertExpressionsToAst(expressions)`| Takes a list of expressions generated by `getExpressionsFromCardscript()` and amends the generated AST's to an object `asts` available from `expressions.asts` |
| `addCardscript(cardscript)` | A combination of `getExpressionsFromCardscript(cardscript)` and `convertExpressionsToAst(expressions)`, used to generate AST's from cardscript in one function call |
| `const visibilityList = calculateWidgetVisibility(cardscript, data, asts)` | Takes a cardscript schema, submission data, and a list of AST's to generate an object of `{key: boolean}` values representing whether a widget should be visible or not |
| `const clean = cleanData(data, visibilityList)`| Takes submission data and a visibility list generated by `calculateWidgetVisibility` and returns a cleaned data object with values of hidden fields removed |


## <a name="license"></a>License
[MIT](https://github.com/wmfs/cardscript/blob/master/LICENSE)
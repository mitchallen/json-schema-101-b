## How to Validate JSON Input with NodeJS (Schema)

This is a slight alternative to the code that is covered in this article:

https://scriptable.com/blog/how-to-validate-json-input-with-nodejs-schema

### Motivation

* This version has a slightly less readable but more efficient version of the parser
* The main code has been moved to a **src/** folder
* The package.json scripts were updated to cover the new folder format

```js
    "good": "node src/index.js test-files/good.json test-files/schema.json",
    "bad": "node src/index.js test-files/bad.json test-files/schema.json",
```


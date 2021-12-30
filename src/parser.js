// Author: Mitch Allen
// File: parser.js

import { readFileSync } from 'fs';
import Ajv from 'ajv';

const ajv = new Ajv();

export function parser(inputFile, schemaFile) {

    let [input, schema] = [
        inputFile,
        schemaFile
    ].map(file => JSON.parse(readFileSync(file)));

    const isValid = ajv.validate(schema, input);

    if (!isValid) {
        console.error(JSON.stringify(ajv.errors, null, 2));
        return undefined;
    }

    console.info('[INFO] Valid!');

    return input;
}


# dobby - templater-core

[![Known Vulnerabilities](https://snyk.io/test/github/eXigentCoder/dobby/badge.svg?targetFile=packages/templater/package/package.json)](https://snyk.io/test/github/eXigentCoder/dobby?targetFile=packages/templater/package/package.json)
![CICD](https://github.com/eXigentCoder/dobby/workflows/Continuous%20Integration%20And%20Deployment/badge.svg)
[![codecov](https://codecov.io/gh/eXigentCoder/dobby/branch/master/graph/badge.svg)](https://codecov.io/gh/eXigentCoder/dobby)

The core templating package. It's purpose is simple: bind valid models into templates.

## Usage

### Method: `bind(template: string, model: object, schema? object) => string`

A `template` string is required, using [Moustache](https://mustache.github.io/) templating syntax.

A `model` is a simple object that has properties you want to bind into the template.

The optional `schema` is a [JSON Schema](https://json-schema.org/) definition that can be used to validate your model. Validation is skipped if no schema is provided. Schemas require the `$id` property as these are used for internal compilation and reuse of schema validators.

<!-- eslint-disable -->

```javascript
import { bind } from "templater-core";

const template =`Hello {{name}}!`;

const model = { name:`bob` };

const schema = {
    $id: `http://example.com/person.json`,
    type: `object`,
    properties: {
        name: { $ref: `defs.json#/definitions/str` },
    }
};

const stringResult = bind(template, model, schema);
console.log(stringResult);
// "Hello bob!"
```

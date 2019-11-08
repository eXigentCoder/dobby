# dobby - templater-core

The core templating package. It's purpose is simple: bind valid models into templates.

## Usage

### Method: `bind(template: string, model: object, schema? object) => string`

A `template` string is required, using [Moustache](https://mustache.github.io/) templating syntax.

A `model` is a simple object that has properties you want to bind into the template.

The optional `schema` is a [JSON Schema](https://json-schema.org/) definition that can be used to validate your model. Validation is skipped if no schema is provided. Schemas require the `$id` property as these are used for internal compilation and reuse of schema validators.

```javascript

import { bind } from "templater-core";

const template = "Hello {{name}}!";

const model = { name: "bob" };

const schema = {
  $id: `http://example.com/person.json`,
  "type": "object",
  "properties": {
    "name": { "$ref": "defs.json#/definitions/str" }
  }
};

const stringResult = bind(template, model, schema);
// "Hello bob!"
```

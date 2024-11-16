import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const indigoScopes: ColorConfig = {
  color: palette.indigo,
  targets: [
    /* Target Scopes
      - attribute, propetry, member, ...
      - parameters in function definition
      - global variables
     */
    "entity.other.attribute-name",
    "meta.attribute",
    "meta.member",
    "variable.object.property",
    "variable.other.property",
    "variable.parameter",

    // c, cpp
    "variable.other.member",

    // cs
    "entity.name.variable.field",
    "entity.name.variable.property",

    // css, less
    "meta.definition.variable",
    "meta.property-list entity.name",
    "meta.property-list",
    "punctuation.definition.variable",
    "support.other.variable",
    "support.type.property-name",

    // env
    "keyword.other.definition",

    // groovy
    "constant.other.key",

    // java
    "variable.other.object.property",
    "constant.other.enum",

    // js, jsx, ts, tsx
    "meta.interface meta.definition entity.name.function",
    "meta.object-literal.key",
    "meta.object.member variable.other.readwrite", // property with new line
    "meta.type meta.definition entity.name.function",

    // makefile
    "meta.scope.prerequisites",

    // perl
    "constant.other.perl",

    // python
    "constant.other.caps",
  ],
};

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
    "variable.parameter",

    // c, cpp
    "variable.other.member",

    // cs
    "entity.name.variable.field",
    "entity.name.variable.property",

    // css, scss, less
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
    "meta.definition.property entity.name.function.tsx", // function property
    "meta.object-literal.key",
    "meta.object.member variable.other.readwrite", // property with new line
    "meta.object.type variable.object.property",
    "variable.other.property",

    // mk
    "meta.scope.prerequisites",

    // pl
    "constant.other.perl",

    // py
    "constant.other.caps",
  ],
};

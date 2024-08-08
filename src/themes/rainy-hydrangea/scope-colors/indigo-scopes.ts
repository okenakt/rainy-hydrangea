import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const indigoScopes: ColorConfig = {
  color: palette.indigo,
  targets: [
    "constant.other.caps",
    "entity.name.variable.property",
    "entity.other.attribute-name",
    "meta.attribute",
    "meta.object-literal.key",
    "support.type.property-name",
    "variable.object.property",
    "variable.other.member",
    "variable.other.property",
    "variable.parameter",
  ],
};

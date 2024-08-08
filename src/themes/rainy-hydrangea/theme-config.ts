import { ThemeConfig } from "@/types";
import { editorColors } from "./editor-colors";
import { scopeColors } from "./scope-colors";
import { scopeStyles } from "./scope-styles";

export const themeConfig: ThemeConfig = {
  name: "Rainy Hydrangea",
  type: "dark",
  semanticHighlighting: false,
  editorColors: editorColors,
  scopeColors: scopeColors,
  scopeStyles: scopeStyles,
};

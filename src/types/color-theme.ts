import { ColorPalette, HexColor } from "./color-palette";

export type TokenSettings = {
  fontStyle?: string;
  foreground?: HexColor;
};

export type TokenColor = {
  name: string;
  scope: string[];
  settings: TokenSettings;
};

export type ColorTheme = {
  name: string;
  type: string;
  semanticHighlighting: boolean;
  colors: ColorPalette;
  tokenColors: TokenColor[];
};

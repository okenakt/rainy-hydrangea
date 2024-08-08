import {
  ColorPalette,
  ColorTheme,
  ThemeConfig,
  TokenColor,
  TokenSettings,
} from "./types";

export class ColorThemeGenerator {
  static generate(themeConfig: ThemeConfig): ColorTheme {
    console.log(`generate ${themeConfig.name}.`);

    // extract editor colors
    const editorColors: ColorPalette = {};
    for (const colorConfig of themeConfig.editorColors) {
      for (const id of colorConfig.targets) {
        if (editorColors.hasOwnProperty(id)) {
          console.log(`  Warnings: Conflict ${colorConfig.color} settings for ${id}.`);
        }
        editorColors[id] = colorConfig.color;
      }
    }

    // extract scope colors
    const scopeSettings: { [key: string]: TokenSettings } = {};
    for (const colorConfig of themeConfig.scopeColors) {
      for (const scope of colorConfig.targets) {
        if (!scopeSettings.hasOwnProperty(scope)) {
          scopeSettings[scope] = {};
        } else {
          console.log(
            `  Warnings: Conflict ${colorConfig.color} settings for ${scope}.`,
          );
        }
        scopeSettings[scope].foreground = colorConfig.color;
      }
    }

    // extract scope styles
    for (const styleConfig of themeConfig.scopeStyles) {
      for (const scope of styleConfig.targets) {
        if (!scopeSettings.hasOwnProperty(scope)) {
          scopeSettings[scope] = {};
        }

        const scopeSetting = scopeSettings[scope];
        if (scopeSetting.fontStyle === undefined) {
          scopeSetting.fontStyle = styleConfig.style;
        } else if (scopeSetting.fontStyle.includes(styleConfig.style)) {
          console.log(
            `  Warnings: Multiple ${styleConfig.style} settings for ${scope}.`,
          );
        } else {
          scopeSetting.fontStyle += " " + styleConfig.style;
        }
      }
    }

    // merge scope settings
    const tokenSettings: { [key: string]: TokenColor } = {};
    for (const scopeName in scopeSettings) {
      const settings = scopeSettings[scopeName];
      const settingName = [
        settings.foreground && settings.foreground,
        settings.fontStyle && settings.fontStyle.replace(" ", "-"),
      ]
        .filter(Boolean)
        .join("-");

      if (!tokenSettings.hasOwnProperty(settingName)) {
        tokenSettings[settingName] = {
          name: settingName,
          scope: [],
          settings: settings,
        };
      }

      tokenSettings[settingName].scope.push(scopeName);
    }

    return {
      name: themeConfig.name,
      type: themeConfig.type,
      semanticHighlighting: themeConfig.semanticHighlighting,
      colors: editorColors,
      tokenColors: Object.values(tokenSettings),
    };
  }
}

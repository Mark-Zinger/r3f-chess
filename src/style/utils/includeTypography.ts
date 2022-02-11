import typography from "../typography";
import { getFont } from "./getFont";

export const includeTypography = ():string => {
  let resultCss: string = '';

  for ( const [selector, font] of Object.entries(typography)) {
      resultCss += `${selector} { ${getFont(font)} }\n`;
  }

  return resultCss;
}

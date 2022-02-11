import { breakpointType } from "../breakpoints";
import { up } from "../utils";

export const fontBreakPoints = ( fBPoints: {[key in breakpointType]? : string | number} ): string => {
  let resultCss: string = '';
  for (const [ breakpoint, fontSize ] of Object.entries(fBPoints)) {
      resultCss += `${up(breakpoint as breakpointType)}{ font-size: ${ typeof fontSize === 'string'? fontSize: fontSize+'px'};}\n`;
  }

  return resultCss;
};

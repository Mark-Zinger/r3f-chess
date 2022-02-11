import fonts from "../fonts";

export const includeFontsAll = ():string => {
  let resultCss: string = '';
  for ( const font of Object.values(fonts)) {
      resultCss += font.weights.map(
          (fontWeight) => `@font-face {
              font-family: '${font.family}';
              src: url('${font.family}-${fontWeight}.${font.format}');
              font-weight: ${fontWeight};
              font-style: normal;
              font-display: swap;
          }\n`
      );
  }

  return resultCss;
}
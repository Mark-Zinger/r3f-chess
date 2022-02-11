import { includeFontsAll, includeTypography } from './utils';
import { ITheme } from './theme';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>(
  ({ theme: { defaultFont, colors } }) => css`    
    body {
        font-family: '${defaultFont}';
        font-weight: 500;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${colors.white};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ${includeFontsAll()}
    ${includeTypography()}
    `
);

export default GlobalStyle

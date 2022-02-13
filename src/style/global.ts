import { includeFontsAll, includeTypography } from './utils';
import { ITheme } from './theme';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>(
  ({ theme: { defaultFont, colors } }) => css`    
    body {
        font-family: '${ defaultFont }';
        background: ${ colors.primaryBlack };
        font-weight: 500;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    a {
        color: inherit;
    }
    
    ${includeFontsAll()}
    ${includeTypography()}
    `
);

export default GlobalStyle

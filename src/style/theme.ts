import './utils';
import colors from "./colors";
import breakpoints from "./breakpoints";
import fonts, {fontNameType} from "./fonts";
import typography from "./fontVariants";


const theme: ITheme = {
    colors,
    breakpoints,
    fonts,
    defaultFont: 'Lovelace',
    typography,
};


export interface ITheme {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    fonts: typeof fonts;
    defaultFont: fontNameType;
    typography: typeof typography;
}

export default theme
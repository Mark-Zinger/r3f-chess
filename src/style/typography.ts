import { fontVariantType } from './fontVariants';



const typography: Record<string, fontVariantType> = {
    h1: 'font20',
    h2: 'font16',
    '.font24': "font24",
    '.font18': "font18"
};

export type typographyType = keyof typeof typography;

export default typography
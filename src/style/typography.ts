import { fontVariantType } from './fontVariants';



const typography: Record<string, fontVariantType> = {
    h1: 'font70',
    h3: 'font35',
    '.font24': "font24",
    '.font18': "font20"
};

export type typographyType = keyof typeof typography;

export default typography
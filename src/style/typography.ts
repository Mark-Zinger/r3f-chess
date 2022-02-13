import { fontVariantType } from './fontVariants';



const typography: Record<string, fontVariantType> = {
    h1: 'font70',
    '.font70': 'font70',
    h2: 'font40',
    h3: 'font35',
    h4: 'font30',
    h5: "font20",
    ".font20": "font20"
};

export type typographyType = keyof typeof typography;

export default typography
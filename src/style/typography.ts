import { fontVariantType } from './fontVariants';



const typography: Record<string, fontVariantType> = {
    h1: 'font70',
    h3: 'font35',
    h4: 'font30',
    '.font24': "font24",
};

export type typographyType = keyof typeof typography;

export default typography
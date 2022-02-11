import { css } from 'styled-components';
import { fontBreakPoints } from './utils/fontBreakPoints';

const fontVariants = {
    font70: css`
        ${fontBreakPoints({ xs: 40, md: 60, xl: 70 })};
        font-weight: 500;
    `,
    font35: css`
        ${fontBreakPoints({ xs: 25, md: 30, xl: 35 })};
        font-weight: 700;
    `,
    font20: css`
        ${fontBreakPoints({ xs: 14, md: 16, hd: 20 })};
        font-weight: 400;
    `,
    font24: css`
        ${fontBreakPoints({ xs: 16, md: 20, hd: 24 })};
        font-weight: 400;
    `
};

export type fontVariantType = keyof typeof fontVariants;

export default fontVariants;

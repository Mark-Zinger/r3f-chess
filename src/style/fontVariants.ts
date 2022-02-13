import { css } from 'styled-components';
import { fontBreakPoints } from './utils/fontBreakPoints';

const fontVariants = {
    font70: css`
        ${fontBreakPoints({ xs: 40, md: 60, xl: 70 })};
        font-weight: 500;
    `,
    font40: css`
        ${fontBreakPoints({ xs: 30, md: 35, xl: 40 })};
        font-weight: 700;
    `,
    font35: css`
        ${fontBreakPoints({ xs: 25, md: 30, xl: 35 })};
        font-weight: 700;
    `,
    font30: css`
        ${fontBreakPoints({ xs: 20, md: 25, hd: 30 })};
        font-weight: 700;
    `,
    font20: css`
        ${fontBreakPoints({ xs: 16, md: 18, hd: 20 })};
        font-weight: 500;
    `
};

export type fontVariantType = keyof typeof fontVariants;

export default fontVariants;

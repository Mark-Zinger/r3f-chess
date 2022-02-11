import { css } from 'styled-components';
import { fontBreakPoints } from './utils/fontBreakPoints';

const fontVariants = {
    font16: css`
        ${fontBreakPoints({ xs: 12, md: 14, xl: 32 })};
        font-weight: 700;
    `,
    font18: css`
        ${fontBreakPoints({ xs: 14, md: 16, xl: 18 })};
        font-weight: 400;
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

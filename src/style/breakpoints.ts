const breakpoints = {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
    hd: '1920px',
    qhd: '2560px',
    uhd: '3840px'
};

export type breakpointType = keyof typeof breakpoints;

export default breakpoints;

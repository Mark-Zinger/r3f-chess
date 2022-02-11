import breakpoints,{breakpointType} from "../breakpoints";

export const up = (breakpoint: breakpointType): string => `@media(min-width:${ breakpoints[breakpoint]})`;

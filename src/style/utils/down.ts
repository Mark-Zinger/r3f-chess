import breakpoints,{breakpointType} from "../breakpoints";

export const down = (breakpoint: breakpointType): string => `@media(max-width:${ breakpoints[breakpoint]})`;

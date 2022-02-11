import { FlattenSimpleInterpolation } from "styled-components";
import fontVariants,{fontVariantType} from "../fontVariants";
export const getFont = ( fontVariant: fontVariantType ):FlattenSimpleInterpolation => fontVariants[fontVariant];
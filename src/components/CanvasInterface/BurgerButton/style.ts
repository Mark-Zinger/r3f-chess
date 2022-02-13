import styled, {css} from "styled-components";


const BurgerButtonContainer = styled.div(
  ({theme}) => css `
    border: 1px solid ${theme.colors.braun};
    height: 32px;
    width: 32px;
    display: block;
    //margin: 40px auto;
    transform: rotate(45deg);
    transform-origin: center center;
    transition: transform .3s ease;
    overflow: hidden;

    position: absolute;
    left: 0; top: 0;
    z-index: 3;
    
    cursor: pointer;

    &.active, &:hover {
      transform: rotate(135deg);
      border: 1px solid #fff;
      
      & > * {
        transform: rotate(-135deg)
      }
      & span {
        transform: translateX(200%);
      }
    }
`)

const BurgerButtonWrapper = styled.div(
  ({theme}) => css `
    height: 100%; width: 100%;
    transform: rotate(-45deg);
    padding-left: 8px;
    padding-top: 10px;
    transition: transform .3s ease;
    transform-origin: center center;

  `
)

const BurgerButtonSpan = styled.span<{index: number}>(
  (props) => css `
    height: 2px;
    width: 14px;
    background: ${props.theme.colors.braun};
    display: block;
    margin-bottom: 2px;
    
    & {
      transition: transform .3s ease;
      transition-delay: ${ props.index / 10 }s;
    }
    
    &::after {
      content: "";
      height: 2px;
      width: 14px;
      position: absolute;
      background: #fff;
      margin-left: -8px;
      left: -19px;
      transition: transform .3s ease, width .3s ease;
    }

    .active &:nth-child(1)::after {
      transform: translateY(1px) rotate(-45deg);
      width: 7px;
    }
    .active &:nth-child(3)::after {
      transform: translateY(-1px) rotate(45deg);
      width: 7px;
    }
  `
)


export {BurgerButtonContainer,  BurgerButtonWrapper, BurgerButtonSpan}
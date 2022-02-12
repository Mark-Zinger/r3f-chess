import styled, {css} from "styled-components";


const Container = styled.button(
  ({theme}) => css `
    width: 48%;
    height: 160px;
    margin-bottom: 4%;
    cursor: pointer;
    
    border-radius: 3px;
    border: none;
    position: relative;
    
    font-family: inherit;
  `
)

const PromotionButtonTitle = styled.h5`
  position: absolute;
  bottom: 10px; left: 50%;
  
  transform: translateX(-50%);
`

export {Container, PromotionButtonTitle}
import styled, {css} from "styled-components";


const Container = styled.button(
  ({theme}) => css `
    width: 48%;
    height: 160px;
    margin-bottom: 4%;
    cursor: pointer;
    
    border-radius: 3px;
    border: none;
    
  `
)

export {Container}
import styled, {css} from "styled-components"



const CanvasInterfaceWrapper = styled.div(
  ({theme}) => css`
    position: fixed;
    left: 0; top: 0;
    height: 100vh; width: 100vw;
    z-index: 5;
    color: ${theme.colors.white};
    padding: 20px;
    pointer-events: none;




  `)

const CanvasInterfaceContainer = styled.div(
  ({theme}) => css`
    height: 100%; width: 100%;
    position: relative;
    & * { pointer-events: auto; }
  `
)

export { CanvasInterfaceWrapper, CanvasInterfaceContainer }
import styled, {css} from "styled-components";
import {motion} from "framer-motion";


const PreloaderContainer = styled(motion.div)(
  ({theme}) => css`
    position: fixed;
    left: 0; top: 0;
    height: 100vh;
    width: 100vw;
    
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 10;
  `
)

const PreloaderTitle = styled.div`
  position: absolute;
  left: 50%; top: 50%;
  
  transition: width .3s ease;
  
  transform: translate(-50%,-50%);
  
  font-weight: 500;
  
`

export {PreloaderContainer, PreloaderTitle}
import { motion } from "framer-motion";
import styled, {css} from "styled-components";






const ModalBackground = styled(motion.div)(
  ({theme}) => css`
  position: fixed;
  left: 0; top: 0;
  height: 100vh;  width: 100vw;
  background: ${theme.colors.modalBackground};
  z-index: 2;
`)

const ModalContainer = styled(motion.div)(
  ({theme}) => css`

  `
)

const ModalBox = styled(motion.div)(
  ({theme}) => css`
    background: ${theme.colors.white};
    width: 400px;
    min-height: 200px;
    position: absolute;
    left: 50%; top: 50%;
    
    transform: translate(-50%, -50%);

    padding: 30px;
    border-radius: 15px;
    z-index: 2;
  `
)


export { ModalBackground, ModalContainer, ModalBox }
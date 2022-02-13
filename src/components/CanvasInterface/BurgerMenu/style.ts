import { motion } from "framer-motion";
import styled, {css} from "styled-components";


const Container = styled.div(
  ({theme}) => css `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //align-items: center;
    width: 100%;
    height: 100%;
    color: ${theme.colors.black};
  `
)

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`

const BurgerButton = styled(motion.button)(
  ({theme}) => css `
    border: none;
    width: 80%;
    padding: 15px;
    font-family: inherit;
    margin-bottom: 20px;
    cursor: pointer;
  `
)





export { Container, Title,BurgerButton }

import styled, {css} from "styled-components";
import {motion} from "framer-motion";




const Container = styled(motion.div)(
  ({theme}) => css`
    background: ${theme.colors.primaryBlack};
    color: ${theme.colors.white};
    position: fixed;
    left: 0; top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
  `
)

const BackgroundVideo = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.2;
  object-fit: cover;
  z-index: -1;
`

const Menu = styled.main(
  ({theme}) => css`
    width: 600px;
    height: 100%;
    margin: 0 auto;
    background: ${theme.colors.menuBackground};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
)

const MenuContainer = styled.div`
  width: 80%;
  text-transform: uppercase;
  text-align: center;
`

const MenuTitle = styled.h1`
  margin-bottom: 40px;
`


const MenuItem = styled.h3<{disabled?: boolean}>(
  ({theme: {colors}, disabled}) => css`
      padding: 10px 0;
      cursor: pointer;
      transition: color .3s ease;
        color: ${disabled? colors.grey : 'inherit' };

      &:hover {
          color: ${disabled? colors.grey : colors.secondary};
      }
  `
)


export {Container, BackgroundVideo, Menu, MenuContainer, MenuTitle, MenuItem}
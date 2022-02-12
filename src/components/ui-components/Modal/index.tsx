import { ModalBackground, ModalContainer, ModalBox } from "./styles";
import {FC, useContext} from "react";
import {AnimatePresence} from "framer-motion";
import {ThemeContext} from "styled-components";


interface ModalProps {
  isOpen: boolean;
  setClose?: ()=>{};
  closeOnEscape?: boolean;
}

const Modal:FC<ModalProps> = (props) => {
  const {
    children,
    isOpen,
    setClose = ()=>{},
    closeOnEscape=true
  } = props;
  
  
  const { colors } = useContext( ThemeContext );
  
  
  
  return (
    <AnimatePresence>
      { isOpen &&
        <ModalContainer>
          <ModalBackground
            initial={{ backgroundColor: '#00000000'}}
            animate={{ backgroundColor: colors.modalBackground}}
            exit={{ backgroundColor: '#00000000'}}
          />
          <ModalBox
            initial={ ModalBoxAnimate.initial }
            animate={ ModalBoxAnimate.animate}
            exit={ ModalBoxAnimate.exit }
          >
            {children}
          </ModalBox>
        </ModalContainer>
      }
    </AnimatePresence>
  )
}


const ModalBoxAnimate = {
  initial: { opacity: 0, y: 60, x: '-50%', scale: 0.5 },
  animate: {
    opacity: 1,
    y: '-50%',
    x: '-50%',
    scale: 1,
    transition: { type: "spring", stiffness: 300 }
  },
  exit: { opacity: 0, x: '-50%', scale: 0,  transition: { stiffness: 300 }}
}

export default Modal;



import {BurgerButtonContainer, BurgerButtonWrapper, BurgerButtonSpan} from "./style";
import {Dispatch} from "react";
import cn from 'classnames';

interface BurgerButtonProps {
  isOpen: boolean;
  setIsBurgerOpen: Dispatch<boolean>;
}


function BurgerButton (props:BurgerButtonProps) {
  const {
    isOpen,
    setIsBurgerOpen
  } = props;
  
  
  return (
    <BurgerButtonContainer
      className={cn({'active': isOpen})}
      onClick={ () => setIsBurgerOpen(!isOpen)}
    >
      <BurgerButtonWrapper>
        { [1,2,3].map(
          (_,i) => <BurgerButtonSpan key={i} index={i}/>
        )
        }
      </BurgerButtonWrapper>
    </BurgerButtonContainer>
  )
}

export default BurgerButton;


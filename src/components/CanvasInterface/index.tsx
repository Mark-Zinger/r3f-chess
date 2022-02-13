import {CanvasInterfaceWrapper,CanvasInterfaceContainer} from "./styled";
import BurgerButton from "./BurgerButton";
import TurnTable from "./TurnTable/indet";
import {useState} from "react";
import BurgerMenu from "./BurgerMenu";
import burgerMenu from "./BurgerMenu";

function CanvasInterface () {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const setBurgerClose = () => setIsBurgerOpen(false)
  
  return (
    <CanvasInterfaceWrapper>
      <CanvasInterfaceContainer>
        <BurgerButton isOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen}/>
        <BurgerMenu isOpen={isBurgerOpen} setClose={setBurgerClose}/>
        <TurnTable/>
      </CanvasInterfaceContainer>
    </CanvasInterfaceWrapper>
  )
}


export default CanvasInterface;
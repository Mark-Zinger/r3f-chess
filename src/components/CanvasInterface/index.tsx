import {CanvasInterfaceWrapper,CanvasInterfaceContainer} from "./styled";
import BurgerButton from "./BurgerButton";
import StatusBar from "./StatusBar";
import {useEffect, useState} from "react";
import BurgerMenu from "./BurgerMenu";
import {useAppSelector} from "../../app/hooks";
import {selectGame} from "../../features/game/gameSlice";

function CanvasInterface () {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const setBurgerClose = () => setIsBurgerOpen(false)
  
  const {game_over} = useAppSelector(selectGame)
  
  useEffect(()=>{
    if(game_over) setIsBurgerOpen(true);
  },[game_over])
  
  return (
    <CanvasInterfaceWrapper>
      <CanvasInterfaceContainer>
        <BurgerButton isOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen}/>
        <BurgerMenu isOpen={isBurgerOpen} setClose={setBurgerClose}/>
        <StatusBar/>
      </CanvasInterfaceContainer>
    </CanvasInterfaceWrapper>
  )
}


export default CanvasInterface;
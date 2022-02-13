import Modal from "../../ui-components/Modal";
import {Container, Title, BurgerButton} from "./style";
import {useAppDispatch} from "../../../app/hooks";
import {exitGame, initGame} from "../../../features/game/gameSlice";

interface BurgerMenuProps {
  isOpen: boolean,
  setClose: () => void
}

const BurgerMenu = (props: BurgerMenuProps) => {
  const {
    isOpen,
    setClose
  } = props
  
  const dispatch = useAppDispatch()
  
  const exitHandler = () => {
    dispatch(exitGame());
    setClose()
  }
  
  const resetHandler = () =>  {
    dispatch(initGame({mode: 'single'}));
    setClose()
  }
  
  
  return (
    <Modal
      isOpen={isOpen}
    >
      <Container>
        <Title>Меню</Title>
        <BurgerButton
          className="font20"
          onClick={setClose}
        >
          Вернуться в игру
        </BurgerButton>
        <BurgerButton
          className="font20"
          onClick={resetHandler}
        >
          Начать игру заново
        </BurgerButton>
        <BurgerButton
          className="font20"
          onClick={exitHandler}
        >
          Выйти в главное меню
        </BurgerButton>
      </Container>
    </Modal>
  )
}

export default BurgerMenu;
import Modal from "../../ui-components/Modal";
import {Container, Title, BurgerButton} from "./style";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {exitGame, initGame, selectGame} from "../../../features/game/gameSlice";
import GameState from "../../../features/game/GameState";

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
  
  const game = useAppSelector(selectGame);
  
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
        <Title>
          { game.game_over
            ? getGameOverTitle(game)
            : 'Меню'
          }
        </Title>
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



const getGameOverTitle = (game:GameState):string => {
  const { checkmate, draw, stalemate, threefold_repenition, insufficient_material } = game;
  switch (true) {
    case checkmate:
      return `Шах и Мат`;
    case draw:
    case stalemate:
    case threefold_repenition:
    case insufficient_material:
      return `Ничья`;
    default:
      return 'Игра Окончена';
  }
}

export default BurgerMenu;
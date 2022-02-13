import {Container, BackgroundVideo, Menu, MenuContainer, MenuTitle ,MenuItem} from "./styles";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {initGame, selectGame} from "../../../features/game/gameSlice";
import {GameMode} from "../../../features/game/GameState";
import {AnimatePresence} from "framer-motion";
import WaterMarks from "../WaterMarks";


/*
 pormotion example: rnbqkbnr/p1P3pp/8/1p1ppp2/2P5/8/PP2PPPP/RNBQKBNR w KQkq f6 0 6
*/

function MainMenu () {

    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(selectGame);
    
    const selectGameMode = ( gamemode: GameMode) => dispatch(initGame({mode: gamemode}));
    
  
    return (
      <AnimatePresence>
          { mode == null &&
            <Container
                exit={{opacity: 0 }}
            >
                <BackgroundVideo src="/AmazingChessVideo.mp4" muted autoPlay loop />
                <Menu>
                    <MenuContainer>
                        <MenuTitle>Шахматы</MenuTitle>
                  
                        <MenuItem onClick={() => selectGameMode('single')}>Одиночная игра</MenuItem>
                        <MenuItem disabled >Играть с ботом</MenuItem>
                        <MenuItem disabled >Игра по сети</MenuItem>
              
                    </MenuContainer>
                </Menu>
                <WaterMarks/>
            </Container>
          }
      </AnimatePresence>
    );
}

export default MainMenu;
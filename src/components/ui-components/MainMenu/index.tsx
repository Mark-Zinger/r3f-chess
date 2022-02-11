import {Container, BackgroundVideo, Menu, MenuContainer, MenuTitle ,MenuItem} from "./styles";
import {useRef} from "react";


function MainMenu () {

    const VideoRef = useRef<HTMLVideoElement>()
  
    const videoPlay = () => {
    
    }
  
    return (
      <Container>
        <BackgroundVideo src="/AmazingChessVideo.mp4" muted autoPlay loop />
        <Menu>
          <MenuContainer>
            <MenuTitle>Шахматы</MenuTitle>
            
            <MenuItem>Одиночная игра</MenuItem>
            <MenuItem disabled >Играть с ботом</MenuItem>
            <MenuItem disabled >Игра по сети</MenuItem>
          
          </MenuContainer>
        </Menu>
      </Container>
    );
}

export default MainMenu;
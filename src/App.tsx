import Canvas from './components/Canvas';
import { Suspense } from 'react';
import {Provider} from "react-redux";
import {store} from "./app/store";
import Index from "./components/ui-components/PromotionModal";
import styled from "styled-components";
import MainMenu from "./components/ui-components/MainMenu";
import CanvasInterface from "./components/CanvasInterface";

function App() {

  return (
    <Provider store={store}>
      <AppContainer>
          <MainMenu/>
          <Index/>
          <Suspense fallback={'Loading ...'}>
              <Canvas />
              <CanvasInterface/>
          </Suspense>
      </AppContainer>
    </Provider>
  );
}


const AppContainer = styled.div`
  height: 100vh;
`

export default App;

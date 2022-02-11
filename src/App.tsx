import Canvas from './components/Canvas';
import { Suspense } from 'react';
import {Provider} from "react-redux";
import {store} from "./app/store";
import PromotionModal from "./components/ui-components/PromotionModal";
import styled from "styled-components";

function App() {

  return (
    <Provider store={store}>
      <AppContainer>
          <PromotionModal/>
          <Suspense fallback={null}>
              <Canvas />
          </Suspense>
      </AppContainer>
    </Provider>
  );
}


const AppContainer = styled.div`
  height: 100vh;
`

export default App;

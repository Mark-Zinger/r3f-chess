import './App.css';
import Canvas from './components/Canvas';
import { Suspense } from 'react';
import {Provider} from "react-redux";
import {store} from "./app/store";
import PromotionModal from "./components/ui-components/PromotionModal";

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
          <PromotionModal/>
          <Suspense fallback={null}>
              <Canvas />
          </Suspense>
      </div>
    </Provider>
  );
}

export default App;

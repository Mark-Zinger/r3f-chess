import './App.css';
import Canvas from './components/Canvas';
import { Suspense } from 'react';

function App() {

  return (
      <div className='App'>
          <Suspense fallback={null}>
              <Canvas />
          </Suspense>
      </div>
  );
}

export default App;

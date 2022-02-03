import {Provider} from 'react-redux';
import { store } from '../app/store'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Environment  } from '@react-three/drei';

import Board from './Board';
import ChessFigures from './ChessFigures';
import MovesView from './MovesView';




function AppCanvas () {
    return (
        <Canvas
            gl={{ alpha: false }}
            dpr={[1, 1.5]}
            camera={{ fov: 70, position: [0, 2, 15] }}
        >
            <color attach='background' args={['#191920']} />
            <fog attach='fog' args={['#191920', 0, 25]} />
            <Environment preset='city' />
            <Provider store={store}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, 10, -10]} />

                <OrbitControls />
                <ChessFigures />
                <Board />
                <MovesView/>
            </Provider>
        </Canvas>
    );
}





export default AppCanvas;



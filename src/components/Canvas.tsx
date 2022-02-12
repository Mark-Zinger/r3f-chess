import {Provider} from 'react-redux';
import { store } from '../app/store'
import { Canvas } from '@react-three/fiber';
import { Environment  } from '@react-three/drei';

import Board from './Board';
import ChessFigures from './ChessFigures';
import MovesView from './MovesView';
import CameraControls from "./CameraControls";
import SelectProvider from "../providers/SelectProvider";
import Effects from "./Effects";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import { Loader } from "@react-three/drei"




function AppCanvas () {
    
    const {colors} = useContext(ThemeContext);
    
    return (
        <>
            <Canvas
              gl={{ alpha: false }}
              dpr={[1, 1.5]}
              camera={{ fov: 70, position: [0, 5, -7] }}
              shadows={true}
            >
                <color attach='background' args={['#07070d']} />
                <fog attach='fog' args={['#191920', 0, 35]} />
                <Environment preset='city' />
                <Provider store={store}>
                    <SelectProvider>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} castShadow />
                        <pointLight position={[-10, 10, -10]} castShadow/>
                        <CameraControls />
                        <ChessFigures />
                        <Board />
                        <MovesView/>
                        <Effects/>
                    </SelectProvider>
                </Provider>
            </Canvas>
        </>

    );
}





export default AppCanvas;



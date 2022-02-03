import {Provider} from 'react-redux';
import { store } from '../app/store'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Reflector, Environment, useTexture } from '@react-three/drei';

import Board from './Board';
import ChessFigures from './ChessFigures';




function AppCanvas () {
    return (
        <Canvas
            gl={{ alpha: false }}
            dpr={[1, 1.5]}
            camera={{ fov: 70, position: [0, 2, 15] }}
        >
            <color attach='background' args={['#191920']} />
            {/* <fog attach='fog' args={['#191920', 0, 15]} /> */}
            <Environment preset='city' />
            <Provider store={store}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, 10, -10]} />

                <OrbitControls />
                <ChessFigures />
                <Board />
            </Provider>
            {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
                <planeGeometry args={[50, 50]} />
            </mesh> */}
        </Canvas>
    );
}


function Ground(props) {
    const [floor, normal] = useTexture([
        '/SurfaceImperfections003_1K_var1.jpg',
        '/SurfaceImperfections003_1K_Normal.jpg'
    ]);
    return (
        <Reflector resolution={1024} args={[8, 8]} {...props}>
            {(Material, props) => (
                <Material
                    color='#f0f0f0'
                    metalness={0}
                    roughnessMap={floor}
                    normalMap={normal}
                    {...props}
                />
            )}
        </Reflector>
    );
}


export default AppCanvas;



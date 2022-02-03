import { useGLTF } from '@react-three/drei';
import { DreiGLTF } from '../../types/DreiGLTF';

import getFigureData from '../../helpers/getFigureData';

function ChessFigure(props: IChessFigure) {
    
    const { file, figureNode, isBlack, position } = getFigureData(props);
    
    const { nodes } = useGLTF(`/resources/${file}`) as DreiGLTF;


    console.log(props);
    // console.log(position);

    return (
        <group position={position}>
            <mesh
                geometry={nodes[figureNode].geometry}
                position={[0, 0.55, 0]}
                rotation={[0, -Math.PI / 8, 0]}
                scale={0.15}
            >
                <meshPhongMaterial color={isBlack ? '#0D0D0D' : '#F2F2F2'} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/resources/king.gltf');


export interface IChessFigure {
    chessPosition: string
    figureType: string
}


export default ChessFigure;
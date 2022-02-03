import { useGLTF } from '@react-three/drei';
import { DreiGLTF } from '../../types/DreiGLTF';

import getFigureData from '../../helpers/getFigureData';
import chess from '../../app/game';
import { move } from '../../features/board/boardSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectHover, setHover, unHover } from '../../features/hoverSlice'


function ChessFigure(props: IChessFigure) {
    
    const { chessPosition } = props;
    const { file, figureNode, isBlack, position } = getFigureData(props);    
    const { nodes } = useGLTF(`/resources/${file}`) as DreiGLTF;

    const dispatch = useAppDispatch();
    const hover = useAppSelector(selectHover);

    window['move'] = (payload) => dispatch(move(payload)); 

    const onPointerOverHandler = () => {
        dispatch(setHover(chessPosition));
    }




    // console.log(props);
    // console.log(position);

    return (
        <group position={position}>
            <mesh
                geometry={nodes[figureNode].geometry}
                position={[0, 0.55, 0]}
                rotation={[0, -Math.PI / 8, 0]}
                scale={0.15}
                onPointerOver={() => dispatch(setHover(chessPosition))}
                onPointerOut={() => dispatch(unHover())}
            >
                <meshPhongMaterial color={isBlack ? '#222222' : '#A5A5A5'} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/resources/king.gltf');


export interface IChessFigure {
    chessPosition: string
    figureType: string,
    color: string
}


export default ChessFigure;
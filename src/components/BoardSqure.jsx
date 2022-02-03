import { memo } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import Square from './Square';
import { threeVectorPoint, chessCordType } from '../helpers/BoardHelpers';


const BoardSqare = memo((props: BoardSquareType) => {
    const { isBlack, chessPosition, position } = props;

    return (
        <group position={position}>
            <Text
                position={[0, 0.01, 0]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                fontSize={0.3}
                color={isBlack ? 'white' : 'black'}
            >
                {chessPosition}
            </Text>
            <Square color={isBlack ? '#222222' : '#F1E8F4'}/>
        </group>
    );
});

export default BoardSqare;


export interface BoardSquareType {
    isBlack: boolean;
    chessPosition: chessCordType;
    position: threeVectorPoint;
}
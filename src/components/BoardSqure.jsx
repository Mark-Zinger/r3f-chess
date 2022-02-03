import React, { memo } from 'react';
import * as THREE from 'three';
import { Text, MeshReflectorMaterial } from '@react-three/drei';
import { threeVectorPoint, chessCordType } from '../helpers/BoardHelpers';




const BlackMaterial = new THREE.MeshPhongMaterial({
    color: '#0D0D0D',
    side: THREE.DoubleSide
});

const WhiteMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    color: '#F2F2F2'
});

const BoardSquareGeometry = new THREE.PlaneBufferGeometry(1, 1, 1);

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
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry args={[1, 1]} />
                <meshPhongMaterial
                    color={isBlack ? '#0D0D0D' : '#F2F2F2'}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
});

export default BoardSqare;


export interface BoardSquareType {
    isBlack: boolean;
    chessPosition: chessCordType;
    position: threeVectorPoint;
}
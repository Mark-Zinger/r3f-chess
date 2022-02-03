import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

export type DreiGLTF = GLTF & {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.MeshStandardMaterial>;
};
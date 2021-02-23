import Chess from 'chess.js';
import * as THREE from 'three'

const chess = new Chess();

export const getBoard = () => chess.board();

export const sqarePositions = [{"x":-3.5,"y":0,"z":3.5},{"x":-2.5,"y":0,"z":3.5},{"x":-1.5,"y":0,"z":3.5},{"x":-0.5,"y":0,"z":3.5},{"x":0.5,"y":0,"z":3.5},{"x":1.5,"y":0,"z":3.5},{"x":2.5,"y":0,"z":3.5},{"x":3.5,"y":0,"z":3.5},{"x":-3.5,"y":0,"z":2.5},{"x":-2.5,"y":0,"z":2.5},{"x":-1.5,"y":0,"z":2.5},{"x":-0.5,"y":0,"z":2.5},{"x":0.5,"y":0,"z":2.5},{"x":1.5,"y":0,"z":2.5},{"x":2.5,"y":0,"z":2.5},{"x":3.5,"y":0,"z":2.5},{"x":-3.5,"y":0,"z":1.5},{"x":-2.5,"y":0,"z":1.5},{"x":-1.5,"y":0,"z":1.5},{"x":-0.5,"y":0,"z":1.5},{"x":0.5,"y":0,"z":1.5},{"x":1.5,"y":0,"z":1.5},{"x":2.5,"y":0,"z":1.5},{"x":3.5,"y":0,"z":1.5},{"x":-3.5,"y":0,"z":0.5},{"x":-2.5,"y":0,"z":0.5},{"x":-1.5,"y":0,"z":0.5},{"x":-0.5,"y":0,"z":0.5},{"x":0.5,"y":0,"z":0.5},{"x":1.5,"y":0,"z":0.5},{"x":2.5,"y":0,"z":0.5},{"x":3.5,"y":0,"z":0.5},{"x":-3.5,"y":0,"z":-0.5},{"x":-2.5,"y":0,"z":-0.5},{"x":-1.5,"y":0,"z":-0.5},{"x":-0.5,"y":0,"z":-0.5},{"x":0.5,"y":0,"z":-0.5},{"x":1.5,"y":0,"z":-0.5},{"x":2.5,"y":0,"z":-0.5},{"x":3.5,"y":0,"z":-0.5},{"x":-3.5,"y":0,"z":-1.5},{"x":-2.5,"y":0,"z":-1.5},{"x":-1.5,"y":0,"z":-1.5},{"x":-0.5,"y":0,"z":-1.5},{"x":0.5,"y":0,"z":-1.5},{"x":1.5,"y":0,"z":-1.5},{"x":2.5,"y":0,"z":-1.5},{"x":3.5,"y":0,"z":-1.5},{"x":-3.5,"y":0,"z":-2.5},{"x":-2.5,"y":0,"z":-2.5},{"x":-1.5,"y":0,"z":-2.5},{"x":-0.5,"y":0,"z":-2.5},{"x":0.5,"y":0,"z":-2.5},{"x":1.5,"y":0,"z":-2.5},{"x":2.5,"y":0,"z":-2.5},{"x":3.5,"y":0,"z":-2.5},{"x":-3.5,"y":0,"z":-3.5},{"x":-2.5,"y":0,"z":-3.5},{"x":-1.5,"y":0,"z":-3.5},{"x":-0.5,"y":0,"z":-3.5},{"x":0.5,"y":0,"z":-3.5},{"x":1.5,"y":0,"z":-3.5},{"x":2.5,"y":0,"z":-3.5},{"x":3.5,"y":0,"z":-3.5}];

export const BlackMaterial = new THREE.MeshLambertMaterial({
    color: '#0D0D0D',
    side: THREE.DoubleSide
})

export const WhiteMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    color: '#C08437'
})

export const getColorMaterial = (color) => {
    switch(color) {
        case 'w': return WhiteMaterial;
        case 'b': return BlackMaterial;
    }
}
  
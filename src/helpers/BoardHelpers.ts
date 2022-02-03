export type xyPoint = { x: number; y: number };
export type threeVectorPoint = [number,number,number];

export type ValuesOf<T extends any[]>= T[number];
export type chessCordType =  ValuesOf<typeof letters>;

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export function getXYPosition(i: number): xyPoint {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
}

export function isBlack(i: number): boolean {
    const { x, y } = getXYPosition(i);
    return (x + y) % 2 === 1;
}

export function getChessPosition(i: number):string {
    const { x, y } = getXYPosition(i);
    const letter = letters[x];
    return `${letter}${y + 1}`;
}

export function getNormalizePosition({x,y}: xyPoint): threeVectorPoint {
    return [x - 3.5, 0, y - 3.5];
}

export function getNormPosFromIndex(i: number): threeVectorPoint {
    return getNormalizePosition(getXYPosition(i));
}

export function getPosFromChessCord(chessCord: chessCordType): threeVectorPoint {
    const [letter, y] = chessCord.split('');
    const x = letters.indexOf(letter);
    return getNormalizePosition({ x, y: parseInt(y)-1 });
}





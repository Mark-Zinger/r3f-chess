import { useAppSelector } from '../app/hooks';
import { selectHover } from '../features/hoverSlice';
import Square from './Square';
import { getPosFromChessCord } from '../helpers/BoardHelpers';

const MovesView = () => {

    const { moves } = useAppSelector(selectHover);

    return (
        <> 
        { ///@ts-ignore 
        moves.map(({to}) => (
            <ViewSqare chessPosition={to} />
        ))
        }
        </>
    );
};

const ViewSqare = ({chessPosition}) => {

    const position = getPosFromChessCord(chessPosition);
    position[1] = 0.001;


    return <Square color='#ff0000' position={position} opacity={0.7}/>;
}

export default MovesView;

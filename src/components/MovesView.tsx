import {useAppDispatch, useAppSelector} from '../app/hooks';
import { selectHover } from '../features/hoverSlice';
import Square from './Square';
import { getPosFromChessCord } from '../helpers/BoardHelpers';
import {selectSelected, unSelected} from "../features/selectedSlice";
import {useCallback} from "react";
import {move} from "../features/board/boardSlice";

const MovesView = () => {

    const dispatch = useAppDispatch();
    
    const hover = useAppSelector(selectHover);
    const selected = useAppSelector(selectSelected);
    
    
    return (
        <> 
        {   hover.target != selected.target &&
            ///@ts-ignore
            hover.moves.map(({to}) => (
                <ViewSqare key={to} chessPosition={to} />
            ))
        }
        { ///@ts-ignore
            selected.moves.map(({to}) => (
              <ViewSqare
                key={to}
                chessPosition={to}
                onClick={() => {
                    dispatch(move({ from: selected.target, to }))
                    dispatch(unSelected())
                }}
              />
            ))
        }
        </>
    );
};

const ViewSqare = ({chessPosition, onClick}:IViewSqare) => {

    const position = getPosFromChessCord(chessPosition);
    position[1] = 0.001;


    return (
      <Square
        color='#ff0000'
        position={position}
        opacity={0.7}
        onClick={onClick}
      />
    );
}

interface IViewSqare {
    chessPosition: string,
    onClick?: (to: any) => any
}


export default MovesView;

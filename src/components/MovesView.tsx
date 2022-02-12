import {useAppDispatch, useAppSelector} from '../app/hooks';
import { selectHover } from '../features/hoverSlice';
import Square from './Square';
import {chessCordType, getPosFromChessCord} from '../helpers/BoardHelpers';
import {selectSelected, unSelected} from "../features/selectedSlice";
import normalizePromotionMoves from "../helpers/normalizePromotionMoves";
import {move} from "../features/game/gameSlice";

const MovesView = () => {

    const dispatch = useAppDispatch();
    
    const hover = useAppSelector(selectHover);
    const selected = useAppSelector(selectSelected);
    

    
    return (
        <> 
        {   hover.target != selected.target &&
            normalizePromotionMoves(hover.moves).map(({to}, index) => (
                <ViewSqare key={index} chessPosition={to} />
            ))
        }
        {   selected.target &&
            normalizePromotionMoves(selected.moves).map(({to}, index) => (
              <ViewSqare
                key={index}
                chessPosition={to}
                onClick={() => {
                    dispatch(move({ from: selected.target as chessCordType, to }))
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

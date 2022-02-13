import {useAppDispatch, useAppSelector} from '../app/hooks';
import { selectHover } from '../features/hoverSlice';
import Square from './Square';
import {chessCordType, getPosFromChessCord} from '../helpers/BoardHelpers';
import {selectSelected, unSelected} from "../features/selectedSlice";
import normalizePromotionMoves from "../helpers/normalizePromotionMoves";
import {move} from "../features/game/gameSlice";
import colors from "style/colors";
import {useEffect, useState} from "react";
import {useControls} from "leva";

const MovesView = () => {

    const dispatch = useAppDispatch();
    
    const hover = useAppSelector(selectHover);
    const selected = useAppSelector(selectSelected);
    

    
    return (
        <> 
        {   hover.target != selected.target &&
            normalizePromotionMoves(hover.moves).map(({to, san}, index) => (
                <ViewSqare key={index} chessPosition={to} san={san}/>
            ))
        }
        {   selected.target &&
            normalizePromotionMoves(selected.moves).map(({to, san}, index) => (
              <ViewSqare
                key={index}
                chessPosition={to}
                san={san}
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

const ViewSqare = ({chessPosition, onClick, san}:IViewSqare) => {

    const position = getPosFromChessCord(chessPosition);
    position.y = 0.001;
    
    
    
    const [color, setColor] = useState('#ff0000')
    
    
    useEffect(()=> {
        switch (san) {
            case "O-O":
            case "O-O-O": setColor("#0066ff")
        }
    },[san])

    return (
      <Square
        color={color}
        position={position}
        opacity={0.7}
        onClick={onClick}
      />
    );
}

interface IViewSqare {
    chessPosition: string,
    onClick?: (to: any) => any,
    san?: string
}


export default MovesView;

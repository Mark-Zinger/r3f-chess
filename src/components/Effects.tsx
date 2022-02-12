import {EffectComposer, Outline, DepthOfField} from "@react-three/postprocessing";
import {useContext, useEffect} from "react";
import {SelectContext} from "../providers/SelectProvider";
import {useAppSelector} from "../app/hooks";
import {selectGame} from "../features/game/gameSlice";




const Effects = () => {

  const {selected} = useContext(SelectContext);
  const selection = selected ? [selected] : undefined
  
  return (
    <EffectComposer multisampling={8} autoClear={false}>
      {/*<DepthOfField focusDistance={0} focalLength={0.1} bokehScale={1} height={480} />*/}
      <Outline
        blur
        //@ts-ignore
        selection={selection}
        // visibleEdgeColor="white"
        hiddenEdgeColor={0xffffff}
        edgeStrength={100}
        width={1000}
      />
    </EffectComposer>
  )
}

export default Effects;
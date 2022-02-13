import {EffectComposer, Outline, SMAA} from "@react-three/postprocessing";
import {useContext, useEffect} from "react";
import {SelectContext} from "../providers/SelectProvider";
//@ts-ignore
import { BlendFunction } from 'postprocessing'



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
        blendFunction={BlendFunction.ALPHA}
        visibleEdgeColor={ 0xffffff }
        hiddenEdgeColor={ 0xffffff }
        edgeStrength={100}
        width={1500}
      />
      <SMAA/>
    </EffectComposer>
  )
}

export default Effects;
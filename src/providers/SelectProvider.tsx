import {createContext, Dispatch, FC, Ref, useEffect, useState} from "react";
import * as THREE from 'three';

type SelectContextValue = {
  selected: Ref<THREE.Mesh> | null;
  onSelected: Dispatch<any>
};


export const SelectContext = createContext<SelectContextValue>(
  {selected: null, onSelected: ()=>{}}
);

const SelectProvider:FC = ({children}) => {
  const [selected, onSelected] = useState(null);
  
  
  return (
    <SelectContext.Provider value={{selected, onSelected}}>
      {children}
    </SelectContext.Provider>
  )
}

export default SelectProvider;
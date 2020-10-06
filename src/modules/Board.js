
import React, { useRef, Suspense, useEffect } from 'react';
import * as THREE from 'three';


export default (props) => {
  
  
  
  return <mesh material={BoardMaterial} geometry={BoardGeometry} {...props}/>
}

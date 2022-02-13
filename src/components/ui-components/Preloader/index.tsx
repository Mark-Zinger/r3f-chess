import { PreloaderContainer, PreloaderTitle } from "./style";
import {useCycle} from "framer-motion";
import {useEffect} from "react";


const Preloader = () => {
  const [title, updateTutle] = useCycle('Загрузка&#160&#160&#160&#160', 'Загрузка&#160.&#160&#160', 'Загрузка&#160..&#160', 'Загрузка&#160...')
  
  useEffect(() => {
    const interval = setInterval(() => updateTutle(), 500);
    
    return () => clearInterval(interval)
  },[])
  
  return (
      <PreloaderContainer
        initial={{opacity:1}}
        exit={{opacity: 0}}
      >
        <PreloaderTitle className="font70" dangerouslySetInnerHTML={{__html: title}}/>
      </PreloaderContainer>
  )
}

export default Preloader
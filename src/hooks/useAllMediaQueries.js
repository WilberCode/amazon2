import { useState } from "react"
import { useEffect } from "react"
import useMediaQuery from "./useMediaQuery"

 

const useAllMediaQueries = () => {
    const minSM = useMediaQuery('(min-width: 640px)')
    const minMD = useMediaQuery('(min-width: 768px)')
    const minLG = useMediaQuery('(min-width: 1024px)')
    const minXL = useMediaQuery('(min-width: 1280px)')
 
 

  const [screen, swswSet]= useState({})

  useEffect(() => {
      swswSet({minSM,minMD,minLG,minXL} ) 
  }, [typeof window !== 'undefined' ? window.innerWidth:0    ]) 
    
  return screen
    
}
 
export  default useAllMediaQueries
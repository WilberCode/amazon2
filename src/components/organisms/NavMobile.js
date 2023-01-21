import { Bars3Icon, MapPinIcon } from "@heroicons/react/24/outline"
import useAllMediaQueries from "../../hooks/useAllMediaQueries"
 
import NavOption from "../molecules/NavOption"

 
const NavMobile = () => { 
 /*  const  {minMD, minLG} = useAllMediaQueries() */
  return ( 
    
        <ul  className="flex-grow  flex flex-nowrap mt-3  scrollbar-hide overflow-x-scroll " >
              <NavOption name="Promociones" /> 
              <NavOption name="Amazon Basics" /> 
              <NavOption name="Más Vendidos" /> 
              <NavOption name="Libros" /> 
              <NavOption name="Livestreams" /> 
              <NavOption name="Video" /> 
          </ul>    
  )
}

export default NavMobile
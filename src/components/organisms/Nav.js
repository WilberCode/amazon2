import { Bars3Icon, Bars4Icon, MapPinIcon } from "@heroicons/react/24/outline"
import useAllMediaQueries from "../../hooks/useAllMediaQueries"
 
import NavOption from "../molecules/NavOption"

 
const Nav = () => { 
  const  {minMD, minLG} = useAllMediaQueries()
  return (
    <div className="bg-amazon_blue-light text-white py-[5px] px-4 flex items-center space-x-1  " >
        {minLG ?  
          <button  className=" inline-flex font-medium link--decoration !px-1 " > <Bars4Icon className="w-6 h-6 mr-[2px] " />Todo</button> 
          : 
          <button  className=" inline-flex font-medium link--decoration !px-1 " > <MapPinIcon  className="w-6 h-6 mr-[2px]" />Enviar a Perú</button>
        }
       
       {/*  <button  className="  hidden md:inline-flex font-medium link--decoration !px-1 " > <Bars3Icon  className="w-6 h-6 mr-[2px] " />Todo</button>
        <button  className=" inline-flex md:hidden font-medium link--decoration !px-1 " > <MapPinIcon  className="w-6 h-6 mr-[2px]" />Enviar a Perú</button> */}
       {minMD && (
        <>
        <ul  className="flex-grow  flex" >
              <NavOption name="Ofertas del Día" /> 
              <NavOption name="Servicio al Cliente" /> 
              <NavOption name="Listas" /> 
              <NavOption name="Tarjetas de Regalo" /> 
              <NavOption name="Vender" /> 
          </ul>  
        </>
        )}
       {minLG && (
        <> 
          <a href="#"  className=" inline-flex font-medium link--decoration " >Compra ya las grandes ofertas</a>
        </>
        )}
     
    </div>
  )
}

export default Nav
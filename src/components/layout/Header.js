import {Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, MapPinIcon, ShoppingCartIcon, UserCircleIcon, UserIcon}  from '@heroicons/react/24/outline'; 
import { ChevronDownIcon, ChevronRightIcon }  from '@heroicons/react/24/solid'; 
import Nav from '../organisms/Nav';
import Link from 'next/link';
import Image from 'next/image';
import useAllMediaQueries from '../../hooks/useAllMediaQueries';
import NavMobile from '../organisms/NavMobile';
import {signIn, signOut, useSession } from 'next-auth/react';
import {useRouter} from 'next/router'; 
import { useSelector } from 'react-redux'; 
import { selectItems } from '../../slices/basketSlice';

const Header = () => {
    const {minLG,minMD, minSM} = useAllMediaQueries()
    const  session  =  useSession()
    const route = useRouter()
    const items = useSelector(selectItems)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    return (
        <header>
            <div className="flex flex-wrap md:flex-nowrap py-3 px-2 bg-amazon_blue-dark text-white ">
                <div  className="flex items-center " >  
                    <div   onClick={()=>route.push('/')} className="px-2 link--decoration  !py-1 cursor-pointer">
                        <img className="w-full max-w-[97px]" src="/amazon.svg" alt="Amazon"   />
                        {/* <Image width="97" height="40"   className="w-full max-w-[97px]" src="https://links.papareact.com/f90" alt="Amazon"  />  */}
                    </div>   
                    {minLG && ( 
                        <div>
                            <button className="flex items-end justify-start py-1 px-1  " >  <MapPinIcon  className="w-5" />  <span className="text-xs" >Enviar a  <mark  className=" text-sm block font-semibold bg-transparent text-white  text-left leading-none "> Perú</mark></span> </button>
                        </div> 
                    )}
                </div>
                 
                {minSM &&  (  
                    <article className="flex-grow px-5" >
                        <div  className="flex items-center">
                            <button  className="flex items-center px-2 text-xs bg-gray-100 text-amazon_blue-light self-stretch  rounded-l-md ">Todos <ChevronDownIcon  className='w-4 h-4 mt-1 ' /> </button>
                            <input type="text"  className="w-full py-2 px-2 text-amazon_blue-light"  />
                            <button  className="  px-3 text-xs   text-amazon_blue-light bg-amazon_blue-mellow hover:bg-[#efa74a] self-stretch  rounded-r-md "> <MagnifyingGlassIcon  className='w-6 h-6  ' /> </button>
                        </div>
                    </article> 
                ) }

                <div className="flex">
                    {minLG && ( 
                        <a href="#" className="flex items-end justify-start py-1 px-2  " >   
                            <GlobeAltIcon  className="w-5 h-5  transform translate-y-[2px]   " /> 
                            <span className="text-xs" > <mark  className=" text-sm block font-semibold bg-transparent text-white  text-left leading-none "> ES</mark> </span> 
                            <ChevronDownIcon  className="w-5 h-4  transform translate-y-[2px]   " /> 
                        </a>
                    )}
                    {minMD && ( 
                    <a  href="#" className="flex items-end justify-start py-1 px-2  group relative" >   
                        <span className="text-xs" > Hola,  {session.data? session.data?.user.name:'Indentificate'}   <mark  className=" text-sm block font-semibold bg-transparent text-white  text-left leading-none "> Cuentas y Lista </mark> </span> 
                        <ChevronDownIcon  className="w-5 h-4  transform translate-y-[2px]   " /> 
                        <div className= "w-[500px] z-10 absolute right-[-86px] top-[45px] bg-white border border-gray-50 rounded-sm p-4 hidden  group-hover:block " >
                            <div className="" >
                                <span  className="hanger"/> 
                                <div  className="text-center pb-3 pt-0 text-amazon_blue-light" >
                                    {session.data ? (
                                        <div  className="flex justify-between items-center" >
                                            <div  className="flex items-center" >
                                                <img className='w-8 h-8 rounded-full' src={session.data?.user.image} alt="Wilber" />
                                                <h1  className="ml-2" >{session.data.user.name} </h1>
                                            </div>
                                            <button  className='btn' onClick={signOut} >Cerrar Sessión</button>
                                        </div>
                                    ):(
                                        <>
                                        <button className="btn w-full max-w-[200px]" onClick={signIn} >Indentifícate</button> 
                                        <div className="text-xs mt-2" >
                                            ¿Eres un cliente nuevo? <a href="#"  className="text-blue-700 hover:underline " >Comineza Aquí</a>
                                        </div>
                                        </>
                                    )}
                                    
                                </div>
                                <hr className="  border-b-0 border-[rgba(0,0,0,0.05)] " />
                                ....
                            </div>
                        </div>
                    </a>
                    )}
 

                    {minLG && ( 
                        <a href="#" className="flex items-end justify-start py-1 px-2  " >   
                            <span className="text-xs" >Devoluciones  <mark  className=" text-sm block font-semibold bg-transparent text-white  text-left leading-none ">y Pedidos</mark></span> 
                        </a>
                    )}
                
                  
 
                </div>
                <div className="flex ml-auto" >
                      {!minSM && (
                        <a href="#" className="inline-flex items-center justify-start py-1 px-2  ring-1 ring-transparent hover:ring-white rounded-[2px] " > <span>Indentifícate</span>  <ChevronRightIcon  className="w-3 h-3 mt-1" />  <UserIcon  className="w-7 h-7 mt-1" />   </a>
                      )}
                      <div  onClick={()=>route.push('/checkout')} className="flex items-end justify-start py-1 pl-2 cursor-pointer  pr-8 sm:pr-2  ring-1 ring-transparent hover:ring-white rounded-[2px] " >  <ShoppingCartIcon  className="w-8" />  <span className="text-xs" > <mark  className=" text-sm block font-semibold bg-transparent text-white  text-left leading-none relative "> <b  className="absolute inline-flex top-[-1.5rem] text-lg left-1 text-amazon_blue-mellow font-semibold " > {items?.length}</b> {minSM && 'Carrito'} </mark></span> </div>

               </div>
                {!minSM && ( 
                    <div className=" flex-grow px-3  sm:px-5 mt-2 " >
                        <div  className="flex items-center">
                            <button  className="flex items-center px-2 text-xs bg-gray-100 text-amazon_blue-light self-stretch  rounded-l-md ">Todos <ChevronDownIcon  className='w-4 h-4 mt-1 ' /> </button>
                            <input type="text"  className="w-full py-2 px-2 text-amazon_blue-light"  />
                            <button  className="  px-3 text-xs   text-amazon_blue-light bg-amazon_blue-mellow self-stretch  rounded-r-md "> <MagnifyingGlassIcon  className='w-6 h-6  ' /> </button>
                        </div>
                   </div>
                )}
                {!minMD && (
                    <NavMobile/> 
                )}
            </div>
            <Nav/>
        </header>
    )
}

export default Header
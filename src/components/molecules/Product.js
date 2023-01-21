 import {  StarIcon } from "@heroicons/react/24/solid"  
import { useDispatch } from "react-redux" 
import { addToBasket } from "../../slices/basketSlice"
import primeFree from "../../utilities/primeFree"
import { ratingStars } from "../../utilities/ratingStars"

 
const Product = ({id,title,price,description,category,image,rating}) => {
/*  
  const limitDesc = (text, limit)=>{
    return text.substring(0, limit)+'...'
  } */
 
/*   const ratingStars = (rate)=>{
    let stars =  Array(Math.round(rate)).fill().map(() => <><StarIcon className="w-4 h-4 text-yellow-500 " /></> )
    return stars
  } */
  const dispatch = useDispatch()

  const addProductToBasket =   ()=> { 
    dispatch(addToBasket({id,title,price,description,category,image,rating}))
  }
  
  
  return  (
    <div  className="bg-white px-10 pt-10 pb-9 relative z-10 flex flex-col " >
        <span  className="absolute top-2 right-3 text-gray-400 ">{category}</span>
        <figure  className="flex justify-center" >
            <img  className="h-44" src={image} alt={title} />
        </figure>
        <div className="mt-5"> 
            <h2  className="text-base font-semibold" >{title}</h2>

            <div  className=" inline-flex space-x-[2px] items-center mt-3 " > {ratingStars(rating.rate) }  </div>
            
            <p className="text-sm line-clamp-2 line-clamp-d-2 " >{description}</p>

            <span className="font-semibold block pt-1 " >S/{price}</span>  
            {primeFree(rating)}
        </div>
         <button onClick={addProductToBasket}  className="btn btn-primary w-full mt-auto !font-medium  ">Add to Basket </button> 
    </div>
  )
}

export default Product
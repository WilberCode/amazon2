 
import { useDispatch } from "react-redux"
import { removeFromBasket } from "../../slices/basketSlice"
import primeFree from "../../utilities/primeFree"
import { ratingStars } from "../../utilities/ratingStars"

 
const CheckoutProduct = ({id,title,price,image,description,rating}) => {
    const dispatch = useDispatch()
    const removeProductFromBasket = () =>{
        dispatch(removeFromBasket({id}))
    }
  
  return (
    <article   className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-12 " >
        <figure  className="block w-[200px] p-8 mx-auto" >
            <img className="w-[200px]" src={image} alt={title}  />
        </figure>
        <div  className="flex-1 pb-4" >
            <h1  className="text-2xl" > {title} </h1>
            <div  className="  flex space-x-[2px] items-center mt-3 " > {ratingStars(rating.rate) }  </div>
            <p  className="mt-2 hidden sm:block" >{description}</p>
            <span  className="inline-flex text-lg font-medium mt-2 " > S/ {price}</span>
            <div>
            {primeFree(rating)}
            </div>
        </div>
        <div className="flex flex-col items-center justify-center" >
            <button className="btn w-full"   >Add to Basket</button>
            <button className="btn w-full mt-4" onClick={removeProductFromBasket} >Remove from Basket</button>
        </div>
    </article>
  )
}

export default CheckoutProduct
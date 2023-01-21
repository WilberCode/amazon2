import { StarIcon } from "@heroicons/react/24/solid"

 
export const ratingStars = (rate)=>{
    let stars =  Array(Math.round(rate)).fill().map(() => <><StarIcon className="w-4 h-4 text-yellow-500 " /></> )
    return stars
}

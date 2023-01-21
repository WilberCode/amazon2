import { signIn, useSession } from "next-auth/react"
import Image from "next/dist/client/image" 
import { useSelector } from "react-redux" 
import Header from "../components/layout/Header"
import CheckoutProduct from "../components/molecules/CheckoutProduct" 
import Currency from "../components/molecules/Currency"
import { selectItems, selectTotal } from "../slices/basketSlice"


 

const Checkout = () => {
    const items = useSelector(selectItems)    
    const total = useSelector(selectTotal)     
    const session = useSession()


    const length =  items?.length
 
  return (
    <>
        <Header/>
        <div  className="bg-gray-100"> 
            <main className="lg:flex max-w-screen-2xl mx-auto lg:space-x-5" >
                <div  className="flex-grow mt-5 shadow-sm " >
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div  className="flex flex-col p-5 space-y-10 bg-white" >
                    
                        <h1 className="text-3xl border-b pb-4" >{length?'Your Shopping Basket':'Tu carrito esta vacio'}</h1>
                        {   length?

                            ( items.map(({id,title,price,image,description,rating}) =>   
                            
                                (<> 
                                       <CheckoutProduct
                                            key={id}
                                            id={id}
                                            title={title}
                                            price={price}
                                            image={image}
                                            description={description}
                                            rating={rating}
                                        />
                               </>)
                            ) ): ''
                        }
                    </div> 
                </div>
                <div  className="p-12 bg-white shadow-sm  " >
                    {
                        !!length && (
                           <>
                            <h2  className="whitespace-nowrap text-xl"> Subtotal ( {length} items): <Currency total={total} currency="Sol"/>  </h2> 
                            <button disabled={!session} onClick={!session.data?signIn: '' } className={`btn !w-full  mt-4 ${!session.data&&'!bg-gray-500 !text-white !border-none cursor-not-allowed'}`}>
                                {!session.data ? 'Inciar session en Checkout':  'Continuar para pagar' }
                            </button> 
                           </>
                        )
                    }
                         
                </div>
            </main>
        </div>
    </>
  )
}

export default Checkout
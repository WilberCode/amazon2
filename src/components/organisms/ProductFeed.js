import Product from "../molecules/Product";

const ProductFeed = ({products}) => { 
 

  return ( 
    
    <div  className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 lg:gap-10 px-5 md:-mt-52" >
            {
                products.slice(0,4).map(({id,title,price,description,category,image,rating}) => (
                    <Product
                        key={id}
                        id={id}
                        price={price}      
                        title={title}      
                        description={description}  
                        category={category}
                        image={image}
                        rating={rating}
                            /> 
                ) )
            } 
            <div  className="sm:col-span-full " >
              <img src="https://links.papareact.com/dyz" alt="banner" />
            </div>

            <div className=" md:col-span-2 ">
            {
                products.slice(4,5).map(({id,title,price,description,category,image,rating}) => (
                    <Product
                        key={id}
                        id={id}
                        price={price}      
                        title={title}      
                        description={description}  
                        category={category}
                        image={image}
                        rating={rating}
                            /> 
                ) )
            } 
            </div> 
            {
                products.slice(5,products.lenght).map(({id,title,price,description,category,image,rating},index) => (
                    <Product
                        key={id}
                        id={id}
                        price={price}      
                        title={title}      
                        description={description}  
                        category={category}
                        image={image}
                        rating={rating}
                            /> 
                ) )
            }  
    </div> 
  )
}

export default ProductFeed
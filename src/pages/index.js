import Head from "next/head";
import Header from "../components/layout/Header";
import Banner from "../components/organisms/Banner";
import ProductFeed from "../components/organisms/ProductFeed";

export default function Home({products}) { 
  return (
    <div className="bg-gray-100  " >
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      
      <Header/>
      <main  className="max-w-screen-2xl mx-auto mb-20"  >
        <Banner/>
        <ProductFeed products={products}/>  
      </main>
    </div>
  );
}


 export async function getServerSideProps(context) {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json();  
    return {
      props:{
         products
      }
    }
 };
 
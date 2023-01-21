import Head from "next/head";
import { useSelector } from "react-redux"; 
import { selectCount } from "../features/counter/counterSlice";
import {MapPinIcon} from '@heroicons/react/20/solid'
 

export default function Home({products}) { 

  const counter  =  useSelector(selectCount)
  console.log(counter);
  return (
    <div className="bg-gray-100  " >
      <Head>
        <title>Amazon 2.0</title>
      </Head>

       
      <main  className="max-w-screen-2xl mx-auto mb-20" style={{textAlign:'center'}}  >
        <h1  className="text-center text-[48px]" > Amazon2 Test  <MapPinIcon className="w-8" /> </h1>
      </main>
    </div>
  );
}

 
 
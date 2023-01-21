import Head from "next/head";
import { useSelector } from "react-redux"; 
import { selectCount } from "../features/counter/counterSlice";
 

export default function Home({products}) { 

  const counter  =  useSelector(selectCount)
  console.log(counter);
  return (
    <div className="bg-gray-100  " >
      <Head>
        <title>Amazon 2.0</title>
      </Head>

       
      <main  className="max-w-screen-2xl mx-auto mb-20" style={{textAlign:'center'}}  >
        Amazon2 Test
      </main>
    </div>
  );
}

 
 
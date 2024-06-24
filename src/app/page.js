import Link from 'next/link'

//all components are server components by default in next js and cant use hooks in them 
//use client to use hooks 
//every file that corresponds to a route must be names page.js 

const Home= () =>  {
  return (
    <div className=' gap-4 py-2 bg-gray-800 w-full min-h-screen flex flex-col items-center justify-center'> 
    <p className='text-gray-300 font-bold text-3xl'>Homepage for the sample app </p>
        <Link href="/display">
          <button className="bg-green-200 text-black p-4 rounded-md hover:bg-pink-300 ">Zustand practice page</button>
        </Link>  
    </div>
  );
}

export default Home 
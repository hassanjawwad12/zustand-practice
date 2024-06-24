"use client";
import React, { useEffect, useState } from 'react';

const Page = ({params}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productid}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 min-h-screen w-full p-4 text-white gap-4">
      <h1 className="text-purple-500 text-4xl">product details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full max-w-md">    
            <div  className="bg-zinc-700 p-4 rounded-lg mb-4">
              <h2 className="text-white">{products.name}</h2>
              <p className="text-white">{products.body}</p>
            </div>     
        </div>
      )}
    </div>
  );
};

export default Page;
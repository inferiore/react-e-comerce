import React, { useState, useEffect } from "react"
import Card from "../../Components/Card/Card"
import Layout from "../../Components/Layout/Layout"
import ProductDetails from "../../Components/ProductDetail/ProductDetails";

function Home() {
  const [products,setProducts] =  useState([]); 
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response =>(response.json()))
    .then(data => setProducts(data));
  },[])
  return (
      <Layout>
          <div className="grid grid-cols-4 gap-4">
            {
              products?.map((product) => {            
                return <Card key={product.id} product = {product} ></Card>
                  }
                )
            }  
          </div>   
          <ProductDetails>
            </ProductDetails>   
      </Layout>
        
  )
}

export default Home

import React, { useState, useEffect, useContext } from "react"
import Card from "../../Components/Card/Card"
import Layout from "../../Components/Layout/Layout"
import ProductDetails from "../../Components/ProductDetail/ProductDetails";
import { ProductsContext } from "../../Context/Context";

function Home() {
  const { filteredProductsList,setSearchProductByTitle,productFilter } = useContext(ProductsContext);
 
  const handleProductSearch = (event)=>{
    setSearchProductByTitle(event.target.value)
  }
  
  return (
      <Layout>
          <div className="w-80 m-5">
            <input className="rounded-lg border w-full h-8 cursor-text p-5" placeholder="Looking for something" 
              type="text" name="productSearch" 
              onChange={(event)=> handleProductSearch(event)}/> 
          </div>  
          <div className="grid grid-cols-4 gap-4">
            {
                filteredProductsList?.map((product) => {            
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

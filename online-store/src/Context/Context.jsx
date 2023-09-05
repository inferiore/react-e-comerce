import React, { useState } from "react"; 


export const ProductsContext =  React.createContext();
export const ProductsProvider = ({children})=>{
    
    const [products,setProducts] = useState([]);
    const [product,setProduct]   = useState({});
    const [isDetailOpen,setIsDetailOpen]   = useState(false);
    
    const  addProduct = ( product=>{
        const products2 = [... products]
        products2.push(product);
        setProducts(products2);
    });
    const closeIsDetailOpen = ()=>{
        setIsDetailOpen(false)
    }
    const openIsDetailOpen = ()=>{
        setIsDetailOpen(true)
    }
    const onSetProduct = (product,imageIndex = 0)=>{
        product.currentImage = product.images[imageIndex];
        product.currentImageIndex = imageIndex;        
        setProduct(product);
    }
    const nextProductImage = ()=>{
        const imageIndex = product.currentImageIndex>=product.images.length ? 0: product.currentImageIndex++; 
        product.currentImage = product.images[imageIndex];
        console.log(product.currentImage);
        setProduct(product);

    }
    const previousProductImage = ()=>{
        
        const imageIndex = product.currentImageIndex<= 0 ? product.images.length-1: product.currentImageIndex--;
        product.currentImage = product.images[imageIndex];
        console.log(product.currentImage);
        setProduct(product);
    }
    
    return (
        <ProductsContext.Provider value={{
            products
            ,setProducts
            ,addProduct
            ,product
            ,onSetProduct
            ,closeIsDetailOpen
            ,openIsDetailOpen
            ,isDetailOpen
            ,nextProductImage
            ,previousProductImage
            }}>
            {children}
        </ProductsContext.Provider>
    )
};
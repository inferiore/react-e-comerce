import React, { useState } from "react"; 


export const ProductsContext =  React.createContext();
export const ProductsProvider = ({children})=>{
    
    const [products,setProducts] = useState([]);
    
    const [product,setProduct]   = useState({});
    //product details
    const [isDetailOpen,setIsDetailOpen]   = useState(false);
    
    //shopping cart
    const [isShoppingCartOpen,setShoppingCartOpen]   = useState(false);
    
    const productIds = products.map(item =>(item.id));
    
    const  addProduct = ( product=>{
        const index = productIds.indexOf(product.id);
        console.log(index,"=>",product.id )
        const products2 = [... products];            
        if(index ==-1){
            products2.push(product);
        }else{
            // products2.splice(index,1);
            console.log("product already exists, Removed")
        }
        setProducts(products2);
    });

    const  deleteProduct = ( product=>{
        const index = productIds.indexOf(product.id);
        const products2 = [... products];            
        products2.splice(index,1);
        setProducts(products2);
    });
    const closeIsShoppingCartOpen = ()=>{
        setShoppingCartOpen(false)
    }
    const openIsShoppingCartOpen = ()=>{
        setShoppingCartOpen(true)
    }

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
            ,openIsShoppingCartOpen
            ,closeIsShoppingCartOpen
            ,isShoppingCartOpen
            ,productIds
            ,deleteProduct
            }}>
            {children}
        </ProductsContext.Provider>
    )
};
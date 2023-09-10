import React, { useEffect, useState } from "react"; 


export const ProductsContext =  React.createContext();
export const ProductsProvider = ({children})=>{
    
    const [products,setProducts] = useState([]);
    
    const [product,setProduct]   = useState({});
    //product details
    const [isDetailOpen,setIsDetailOpen]   = useState(false);
    
    //shopping cart
    const [isShoppingCartOpen,setShoppingCartOpen]   = useState(false);
    
    //orders
    const [orders, setOrders ] = useState([]);
    // API Products
    const [productsList,setProductsList] =  useState([]); 
    
    // API Products
    const [filteredProductsList,setFilteredProductsList] =  useState([]); 
    // Search Products by title 
    const [searchProductByTitle,setSearchProductByTitle] =  useState(); 
    
    const [searchProductByCategory,setSearchProductByCategory] =  useState(); 
    
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response =>(response.json()))
        .then(data => {
            setProductsList(data);
            setFilteredProductsList(data);
            }
        );
    },[])
    
    useEffect(()=>{
        if(searchProductByCategory && !searchProductByTitle){            
            productFilterByCategory()
        }
        
        if(!searchProductByCategory && searchProductByTitle){
            productFilter()
        }
        if(searchProductByCategory && searchProductByTitle){
            productFilterByCategoryAndTitle()
        }

    },[searchProductByCategory,searchProductByTitle])


    const productFilter = ()=>{
        if(searchProductByTitle && searchProductByTitle.length>0){
           
           setFilteredProductsList(productsList.filter(
            (product)=>product.title.toLowerCase().includes(searchProductByTitle.toLowerCase(searchProductByTitle)))
            );
           console.log(searchProductByTitle,"=>",filteredProductsList)
        }
    }
    const productFilterByCategory = ()=>{
        if(searchProductByCategory == "all"){
            setFilteredProductsList(productsList);
            return 0;
        }
        if( searchProductByCategory && searchProductByCategory.length>0){
           setFilteredProductsList(
                productsList.filter(
                    (product) => product.category.name.toLowerCase().includes(searchProductByCategory.toLowerCase(searchProductByCategory)))
                );
            console.log(searchProductByCategory,"=>",filteredProductsList)
        }
    }

    const productFilterByCategoryAndTitle = ()=>{

        setFilteredProductsList(
            productsList.filter(
                (product) => 
                product.category.name.toLowerCase().includes(searchProductByCategory.toLowerCase(searchProductByCategory))
                && 
                product.title.toLowerCase().includes(searchProductByTitle.toLowerCase(searchProductByTitle))
                )
            );

            console.log(searchProductByCategory , searchProductByTitle)
    }
    
    
    
  
    const productIds = products.map(item =>(item.id));
    
    const  addProduct = ( product=>{
        const index = productIds.indexOf(product.id);
        const products2 = [... products];            
        if(index ==-1){
            products2.push(product);
        }else{
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
            ,orders
            ,setOrders
            ,productsList
            ,setProductsList
            ,searchProductByTitle
            ,setSearchProductByTitle
            ,productFilter
            ,filteredProductsList
            ,setSearchProductByCategory,
            productFilterByCategory
            }}>
            {children}
        </ProductsContext.Provider>
    )
};
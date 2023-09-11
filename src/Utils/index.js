export const TotalPrice = (products)=>{

    return products.reduce((sum, product) => sum+product.price ,0)

}
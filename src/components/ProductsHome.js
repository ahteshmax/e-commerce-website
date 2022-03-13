import React, { useEffect, useState,useContext, useCallback} from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import {ProductContext} from './App'

const productDami = {
    title: "t-shart"
}
function ProductsHome(props) {
  
  const allProducts = useContext(ProductContext)
  const [allProductsHome, setAllProductsHome] = useState([{category: "men's clothing",
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: {rate: 3.9, count: 120},
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}])

 

    // useEffect(() => {
      
      //     axios.get('https://fakestoreapi.com/products').then(resp => {

    //         console.log(resp.data);
    //         setAllProducts(resp.data)
    //     });

 
    // },[])
    
    // if (allProducts != undefined) {
    //     setAllProductsHome(allProducts)
    //     console.log(allProducts)
    // }
    
    return (
      <div className='home-container'>

    <div className="ui four cards">
          {/* <div>ProductsHome</div> */}
          {allProducts.map((product) => {
              
              return(<ProductCard product={product} addToCart={props.addToCart} key={product.id}/>)
            })}
          {/* <ProductCard data="tshart" /> */}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}


      </div>
      </div>
  )
}

export default ProductsHome
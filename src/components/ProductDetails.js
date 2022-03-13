import React, { useEffect, useState } from 'react'
import image from '../images/user.png'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios'
import $ from 'jquery';

// This waits for the DOM to load correctly before changing elements
// This waits for the DOM to load correctly before changing elements

function ProductDetails(props) {
    
    const [product, setProduct] = useState({})
    const { id } = useParams();
    console.log(product)
    

    useEffect(() => {
        
        axios.get(`https://fakestoreapi.com/products/${id}`).then(resp => {
            
            setProduct(resp.data)
            console.log(resp.data);
        })
        
        
     
 
    },[])

    const navigate = useNavigate();


  return (
    <div className='produt-details'>Product Details Page

      
        <h2>{product.title}</h2>


        <h2>{`${id}`}</h2>

      <img className="ui medium rounded image" src={product.image} />

      <h2>{` Price : ${product.price} `}</h2>

      <p style={{width:"35%", textAlign: "center", margin: "auto", padding:"25px", fontFamily:"bold"}} >{` Description : ${product.description} `}</p>

      <div className="ui star rating" data-rating="3" data-max-rating="5"></div>
      <div className="ui rating" data-max-rating="1"></div>
      <div className="ui heart rating" data-rating="1" data-max-rating="3"></div>

      <button onClick={() => navigate(-1)}>Go Back</button>

    </div>
  )
}

export default ProductDetails
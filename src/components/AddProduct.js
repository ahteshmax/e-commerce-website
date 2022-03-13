import React, {useEffect, useState } from 'react'
import Header from './Header'
import SideMenu from './SideMenu'
import image from '../images/user.png'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Input } from 'semantic-ui-react'

function AddProduct() {

    const [product, setProduct] = useState({})
    // const { id } = useParams();
    // console.log(product)
    

    // useEffect(() => {
        
    //     axios.get(`https://fakestoreapi.com/products/${id}`).then(resp => {
            
    //         setProduct(resp.data)
    //         console.log(resp.data);
    //     })
        
        
     
 
    // },[])
    const navigate = useNavigate();
    const [addProduct, setAddProduct] = useState({
        title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    category: 'electronic'})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
        // alert(`The name you entered was: ${name}`)
        // fetch('https://fakestoreapi.com/products',{
        //     method:"POST",
        //     body:JSON.stringify(addProduct)
        // })
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        axios.post('https://fakestoreapi.com/products', addProduct, {
        headers: { }
        }).then((res) => {
            console.log(res)
            console.log(addProduct)
            setProduct(addProduct)
        })
    }

    return (
    <div>
        {/* <Header /> */}
        {/* <SideMenu />  */}

        <div className='produt-details'>

                <h2>{product.title}</h2>


                {/* <h2>{`${id}`}</h2> */}

                <img className="ui medium rounded image" src={product.image} />

                <h2>{` Price : ${product.price} `}</h2>

                <p>{` Description : ${product.description} `}</p>

                {/* <div className="ui star rating" data-rating="3" data-max-rating="5"></div>
                <div className="ui rating" data-max-rating="1"></div>
                <div className="ui heart rating" data-rating="1" data-max-rating="3"></div> */}

                {/* <button onClick={() => navigate(-1)}>Go Back</button> */}

                </div>

         <div className='add-product'>
             <form onSubmit={handleSubmit}>
             <label> 
             <br></br>
                 <br></br>
                 Enter Product Title : {addProduct.title}
                 <br></br>
             <Input type="text" placeholder="  Enter Product Title" value={addProduct.title}
                    onChange={(e) => setAddProduct({...addProduct, title: e.target.value})}/>
             </label>
             <label>
             <br></br>
                 <br></br>
                  Enter Product Description : {addProduct.description}
                 <br></br>
             <Input type="text" placeholder="  Enter Product Description" value={addProduct.description}
                    onChange={(e) => setAddProduct({...addProduct , description: e.target.value})}/>
             </label>
             <label> <br></br>
                 <br></br> 
                 Enter Product category : {addProduct.category}
                 <br></br>
             <Input type="text" placeholder="  Enter Product category" value={addProduct.category}
                    onChange={(e) => setAddProduct({...addProduct , category: e.target.value})}/>
             </label>
                 <br></br>
                 <br></br>
                
             <label> Enter Product price : {addProduct.price}
             
             <br></br>
                 <br></br>
             <Input type="number" placeholder="  Enter Product category" value={addProduct.price}
                    onChange={(e) => setAddProduct({...addProduct , price: e.target.value})}/>
             </label>
                 <br></br>
                 <br></br>
            
             <label> Enter Product image URL : {addProduct.image}
             
             <br></br>
                 <br></br>
             <Input  type="text" placeholder="  Enter Product Img URL  " value={addProduct.image}
              onChange={(e) => setAddProduct({...addProduct , image: e.target.value})}/>
             </label>
        
                 <br></br>
                 <br></br>
                <button className="ui button" type='onSubmit'>
                Submit
                </button>

             </form>
             <br></br>
             <br></br>
         <button className="ui secondary button"onClick={() => navigate(-1)}>Go Back
            </button>
         </div>

    </div>
  )
}

export default AddProduct
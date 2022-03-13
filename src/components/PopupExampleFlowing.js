import React,{useContext, useEffect, useState} from 'react'
import img from '../images/user.png'
import { Header, Button, Popup, Grid, Image } from 'semantic-ui-react'



let allProductsFilter = []

// let total = 0




function PopupExampleFlowing  (props) {

    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const removeCartItem = (id) => {
        allProductsFilter = allProducts.filter(function(item){
          return item.id !== id})
          setAllProducts(allProductsFilter)
          // setTotal(0)
       
       
        allProducts.map((product) => {
          if(product.id === id){
            setTotal(total - product.price)
          }
        })

    {console.log(allProductsFilter)}
    }

    useEffect(() => {
      props.allProducts.map((product) => {
        if(product.id === props.id){
          setAllProducts([...allProducts, product]) 
          setTotal(total + product.price)
          // total = total + product.price
                  }
      })

      // allProductsFilter.map((product) => {
      //   total = total + product.price
      // })
     
    },[props.id])

    // useEffect(() => {
    //     props.allProducts.map((product) => {
    //         if(product.id === props.id){
    //             total = total + product.price
    //             allProductsFilter.push( product)
    //         }
    //     })
    // },[props.id])
    
    // useEffect(() => {
    //     {props.allProducts.map((product) => {
        
            // if(props.id === product.id){
            //     total = total + product.price
            //     setAllProducts(product)
            // }
                    
                    
    //             //     <div className='cart-grid'>
    //             // <Grid.Row>
    //             // <Grid.Column>
    //             // <div className='cart-item'>
    //             // <img src={product.image} />
    //             // <p>Title: {product.title} </p>
    //             // <p>price : {product.price}</p>
    //             // <div className='btn-trash'>
    //             // <i className='trash alternate outline icon' 
    //             // onClick={() => {
    //             //     removeCartItem(product.id)
                   
    //             // }}
    //             //   style={{color: "red" , marginTop: "0px", marginLeft: "10px"}}
    //             //   >
    //             //   </i>
    //             // </div>
    //             // </div>
    //             // </Grid.Column>
    //             // </Grid.Row>  
    //             // </div>
                
                
    //             )
    //         }  
    //             })}
    //     // allProducts.map((product) => {
    //     //     // (total = total + item.price)
    //     //     return(
    //     //     <div className='cart-grid'>
    //     //     <Grid.Row>
    //     //     <Grid.Column>
    //     //     <div className='cart-item'>
    //     //     <img src={product.image} />
    //     //     <p>Title: {product.title} </p>
    //     //     <p>price : {product.price}</p>
    //     //     <div className='btn-trash'>
    //     //     <i className='trash alternate outline icon' 
    //     //     onClick={() => {
    //     //         removeCartItem(product.id)
               
    //     //     }}
    //     //       style={{color: "red" , marginTop: "0px", marginLeft: "10px"}}
    //     //       >
    //     //       </i>
    //     //     </div>
    //     //     </div>
    //     //     </Grid.Column>
    //     //     </Grid.Row>  
    //     //     </div>)
    //     // })
    // },[])
    return(<>
  
  <Popup className='popup' trigger={ <i className="shop icon cart-icon"></i>} flowing hoverable>

  

            {allProducts.map((product) => {
                // (total = total + item.price)
                // {    total = total + product.price}
                return(
                <div className='cart-grid'>
                <Grid.Row>
                <Grid.Column>
                <div className='cart-item'>
                <img src={product.image} />
                <p>Title: {product.title} </p>
                <p>price : {product.price}</p>
                <div className='btn-trash'>
                <i className='trash alternate outline icon' 
                onClick={() => {
                    removeCartItem(product.id)
                   
                }}
                  style={{color: "red" , marginTop: "0px", marginLeft: "10px"}}
                  >
                  </i>
                </div>
                </div>
                </Grid.Column>
                </Grid.Row>  
                </div>)
            })}
        
    
    <div className="btn-item ui primary button" onClick={(e) => props.addToCart(e,props.product.id)}>
    <i className="shop icon"></i>Total: {`${total.toFixed(2)}$`}  Check Out
            </div>

   
      {/* Grid.Column textAlign='center'>
        <Header as='h4'>Basic Plan</Header>
        <p>
          <b>2</b> projects, $10 a month
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Business Plan</Header>
        <p>
          <b>5</b> projects, $20 a month
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Premium Plan</Header>
        <p>
          <b>8</b> projects, $25 a month
        </p>
        <Button>Choose</Button>
      </Grid.Column> */}
    {/* </Grid> */}
  </Popup>
  </>)
}

export default PopupExampleFlowing
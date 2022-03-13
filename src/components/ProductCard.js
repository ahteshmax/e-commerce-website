import React,{useCallback} from 'react'
import image from '../images/user.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ProductCard(props) {
    const navigate = useNavigate();

    const imageClick = (e,id) => {
        console.log('Click' + id);
        // <Link to="/about">About</Link>
        // <Link to="/productDetails"></Link>
        navigate(`/productDetails/${id}`)
      } 
   

  return (
    <div className='product-card'>

        <div className="ui card">
        <div className="image">
      
            <img style={{minHeight:"250px",maxHeight:"250px"}} src={props.product.image} onClick={(e) => imageClick(e,props.product.id)} />
      
        </div>
        <div className="content">
            <a className="header">{props.product.title}</a>
            <div className="meta">
            <span className="date">{`Category : ${props.product.category}`}</span>
            </div>
            <div className="description">
            Kristy is an art director living in New York.
            </div>
        </div>
        <div className="extra content">
            <a>
            <i className="user icon"></i>
            {`Rating : ${props.product.rating.rate}`}
            </a>
        </div>
        {/* <div className="extra">
            Rating:
            <div className="ui star rating" data-rating="4"></div>
            </div> */}
            <div className="ui primary button" onClick={(e) => props.addToCart(e,props.product.id)}>
                <i className="shop icon"></i> Add to Cart
            </div>
        
        </div>

    </div>
  )
}

export default ProductCard
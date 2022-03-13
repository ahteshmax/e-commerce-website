import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PopupExampleFlowing from './PopupExampleFlowing'
import {ProductContext} from './App'

const Header = (props) => {
    const allProducts = useContext(ProductContext)
    
    return(
        <div className='main-nav'>

            <div className="ui secondary  menu">
            <Link to="/" className="active item">Home</Link>
            <a className="item"> Products</a>
            <a className="item"> Category</a>
            <Link to="/addProduct" className="item">Admin Add Products</Link>

            <div className="right menu">
                <div className="item">
                <div className="ui icon input search-input">
                    <input type="text" placeholder="Search..." />
                    <i className="search link icon"></i>
                </div>
                <PopupExampleFlowing allProducts={allProducts} id={props.id}></PopupExampleFlowing>
                    {/* <i className="shop icon cart-icon"></i> */}
                     {`Item:${props.cartItemNum}`}
                </div>
                <div className='btn-sing-in'>
                <a className=" positive ui button">
                Sign-In
                </a>
                </div>
                <div>
                    
                </div>
            </div>
            </div>
        
        </div>
    )
        {/* // <div className='ui fixed menu'>
        //     <div className='ui container center'>
        //         <h2>E-Ecommerce Store Demo</h2>

        //     </div>
        // </div> */}
}

export default Header
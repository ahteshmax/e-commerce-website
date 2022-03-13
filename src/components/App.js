import React,{ useState, useCallback,createContext,useEffect} from 'react'
import AddContact from './AddContact'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
  } from "react-router-dom";
  import axios from 'axios'
import './App.css'
import ContactList from './ContactList'
import Header from './Header'
import ProductDetails from './ProductDetails'
import ProductsHome from './ProductsHome'
import SideMenu from './SideMenu'
import { Link } from "react-router-dom";

export const ProductContext = createContext()

function App(){
    
    const [category, setCategory] = useState([])
    const [sort, setSort] = useState("")
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then(resp => {
            setCategory(resp.data)
            console.log(resp.data);
        })
    },[])
    const uri =  category === null ? ""  : ""

        const [allProducts, setAllProducts] = useState([{category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}])

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products').then(resp => {

            console.log(resp.data);
            setAllProducts(resp.data)
        });

 
    },[])

    //// sidemenu category
    // const [products, setProdcuts] = useState([]);
    const callback = useCallback((category) => {
        // setProdcuts(products);
        // console.log(contactsData)
        setCategory(category)
        console.log(`call back called ${category}`)
        
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then(resp => {

            console.log(resp.data);
            setAllProducts(resp.data)
        });
      }, [category]);

      const callbackSort = useCallback(() => {
        // setProdcuts(products);
        // console.log(contactsData)
        // setSort(sort)
        console.log(`call back called ${"sort"}`)
        
        axios.get(`https://fakestoreapi.com/products?sort=desc`).then(resp => {

            console.log(resp.data);
            setAllProducts(resp.data)
        });
      }, []);

      const callbackAll = useCallback(() => {
        // setProdcuts(products);
        // console.log(contactsData)
        // setSort(sort)
        console.log(`call back called ${"all products"}`)
        
        axios.get(`https://fakestoreapi.com/products`).then(resp => {

            console.log(resp.data);
            setAllProducts(resp.data)
        });
      }, []);


      const [cartItemNum, SetCartItemNum]  = useState(0)
      const [id, setId]  = useState(0)
      let countClick = 0
      const addToCart = useCallback((e,id) => {
        countClick++
        console.log(`product added to card id : ${id}`)
        SetCartItemNum(countClick)
        setId(id)
        console.log(cartItemNum)
      },[])

    return(
        <div className='main-container'>
    
            {/* <Routes> */}
            {/* <Header />
            <SideMenu /> */}
            {/* <Route path='/'> */}
            <ProductContext.Provider value={allProducts} > 
            <Header cartItemNum={cartItemNum} id={id} />
            <SideMenu callback={callback} callbackSort={callbackSort} callbackAll={callbackAll} />
            <ProductsHome allProducts={allProducts} addToCart={addToCart} />
            </ProductContext.Provider>
            {/* </Route> */}
            {/* <Route path='/productDetails'> */}
            {/* <ProductDetails /> */}
            {/* </Route>
            </Routes> */}
            {/* <AddContact parentCallback={callback} />
            <ContactList contactsData={contactsData}/>
            App from skach */}
        </div>
    )
}

export default App
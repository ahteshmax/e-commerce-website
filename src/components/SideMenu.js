import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import {ProductContext} from './App'


function SideMenu({callback, callbackSort, callbackAll}) {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then(resp => {
            setCategory(resp.data)
            console.log(resp.data);
        })
    },[])

    // const nameContext = useContext(ProductContext)

  return (
    <div className='side-menu'>

<div className="ui vertical menu">
  <div className="item">
    <div className="ui input"><input type="text" placeholder="Search..." /></div>
  </div>
  <div className="item">
    {/* Home {nameContext} */}
    <div className="menu">
      <a className="active item" >Category</a>
      {category.map((item) => {
          return(<a key={item} className="item" onClick={(e) => {callback(item)}}>{item}</a>)
      })}
      {/* <a className="item">Remove</a> */}
    </div>
  </div>
  <a className="item"  onClick={(e) => callbackSort()}>
    <i className="grid layout icon"></i> Sort
  </a>
  <a className="item" onClick={(e) => callbackAll()}>
    All
  </a>
  <div className="ui dropdown item">
    More
    <i className="dropdown icon"></i>
    <div className="menu">
      <a className="item"><i className="edit icon"></i> Edit Profile</a>
      <a className="item"><i className="globe icon"></i> Choose Language</a>
      <a className="item"><i className="settings icon"></i> Account Settings</a>
    </div>
  </div>
</div> 

{/* <div class="ui middle aligned divided list">
  <div class="item">
    <div class="right floated content">
      <div class="ui button">Add</div>
    </div>
    <img class="ui avatar image" src="/images/avatar2/small/lena.png"/>
    <div class="content">
      Lena
    </div>
  </div>
  <div class="item">
    <div class="right floated content">
      <div class="ui button">Add</div>
    </div>
    <img class="ui avatar image" src="/images/avatar2/small/lindsay.png" />
    <div class="content">
      Lindsay
    </div>

  </div>
</div> */}

    </div>
  
  )
}

export default SideMenu
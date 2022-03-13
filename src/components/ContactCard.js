import React, { useState } from 'react'
import user from '../images/user.png'



const contactCardList = [{
    id: 122,
    name: "MAx",
    email: "max@gmail.com"
},
{
    id: 125,
    name: "prince",
    email: "prince@gmail.com"
}]
const deleteContact = (id) => {
    console.log(id)
}

const ContactCard = (props) => {

    // const [name, setName ] =  useState("")
    // setName(props.contact.name)

    return(
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user'/>
            <div className='content'>
                <div className='header'> {props.contact.name}</div>
                <div>{props.contact.email}</div>
           
            </div>
            <i className='trash alternate outline icon' 
            style={{color: "red" , marginTop: "7px", marginLeft: "10px"}}
            onClick={deleteContact(contactCardList[0].id)}>
            </i>
            <i className='edit alternate outline icon'
                style={{color: "blue", marginTop: "7px"}}>
            </i>
        </div>
    )

}

export default ContactCard
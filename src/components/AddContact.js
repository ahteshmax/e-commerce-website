import React, { useState } from 'react'
  

const AddContact  = ({ parentCallback }) => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [contactData, setContactData] = useState([{name:"max",email:"maxz@gmail.com"}])

    const add = (e) => {
        e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
        console.log(name ,email)
        setContactData([...contactData ,  {name:name,email:email}])
        parentCallback(contactData)

        
        if(contactData.length > 0){
            contactData.forEach((contact) => {
                console.log(contact.name , contact.email)
            })
            
        }

    } 

    return(
        <div className='ui main'>
            <h2> Add Contact </h2>
            <form className="ui form" onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Enter Name' value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" name="email" placeholder='Enter Email' value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button className='ui button blue'>Add</button>
            </form>

        </div>
    )

  }

  export default AddContact
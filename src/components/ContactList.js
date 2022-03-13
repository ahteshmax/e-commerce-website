import React from 'react'
import ContactCard from './ContactCard'

const onUserSearch = (e) => {
    console.log("serach user ")
}

const ContactList = (props) => {

    return(
        <div className='main'>
            <h2> Contact List </h2>
            <div className='ui search'>
                <div className='ui icon input'>
                    <input type="text" placeholder="Search Contacts" className="prompt" 
                    valur={"hhhh"}
                    onChange={(e) =>onUserSearch(e)}/>
                     <i className="search icon"></i>
                </div>
            </div>
            <div className='ui celled list'>
                {/* {props.contactsData.m(contact => {
                    console.log(contact)
                    return <ContactCard contact={contact}/>
                })} */}
               {props.contactsData.map((contact) => {
                   return( <ContactCard contact={contact}/>)
                })}
            </div>
        </div>
    )

}

export default ContactList
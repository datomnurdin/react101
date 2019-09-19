import React from 'react'

function ContactCard(props){
    console.log(JSON.stringify(props))
    return(
        <div>
            <img src={props.contact.imgUrl}></img>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}

export default ContactCard
import React from "react"

function ContactCard(props){

    const styleObject = {
        maxWidth: '20vw'
    }

    return(
    <div>
      <img style={styleObject} src= {props.contact.imgUrl}/>
      <h3>{props.contact.name}</h3>
      <p>Phone:{props.contact.phone}</p>
      <p>Email:{props.contact.email}</p>
    </div>
    )
}



export default ContactCard
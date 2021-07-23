import React from "react"

function ContactCard(props){
    const styles = {
        resizeMode: "cover",
        height: 200,
        width: 300
    }
    return(
        <div className="contact-card">
      <img 
        style={{styles}} 
        src="https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"/>
      <h3>Mr. Tiger</h3>
      <p>Phone: +49154447856</p>
      <p>Email:tiger@gmail.com</p>
    </div>
    )
}

export default ContactCard
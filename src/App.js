import React from "react"

import './App.css';
import ContactCard from "./ContactCard";


function App() {
  return (
    <div className="contacts">
      <ContactCard 
        contact={{name:"Mr. Tiger", imgUrl:"https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80",
      phone:"+49154447856", email:"tiger@gmail.com" }}   
    />
      <ContactCard
      contact={{name:"Mr.Darktiger", imgUrl:"https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1907&q=80",
    phone:"+4913455874748484", email:"darktiger@gmail.com"}}
      />
      <ContactCard  
      contact={{name:"Mr.Redtiger", imgUrl:"https://images.unsplash.com/photo-1590767413066-12029959a235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      phone:"+4912347888", email: "redtiger@gmail.com"}}
      />
      <ContactCard 
      contact={{name:"Mr. Whitetiger", imgUrl:"https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
      phone:"+49123589994", email: "whitetiger@gmail.com"}}  
      />
  </div>  
  )
}

export default App;

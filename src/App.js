import React from "react"

import './App.css';
import ContactCard from "./ContactCard";


function App() {
  return (
    <div className="contacts">
      <ContactCard 
        contact={{name="Mr. Tiger", imgUrl="https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80" />,
      phone="+49154447856", Email="tiger@gmail.com"  
    }}   
      <ContactCard
      contact={{name="Mr.Darktiger", imgUrl="https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1907&q=80",
    phone="+4913455874748484", Email="darktiger@gmail.com"
    }}
      
      />
      <ContactCard />
      <ContactCard />
    <div className="contact-card">
      <img 
        style={{
          resizeMode: "cover",
          height: 200,
          width: 300
        }} 
        src="https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"/>
      <h3>Mr. Tiger</h3>
      <p>Phone: </p>
      <p>Email:tiger@gmail.com</p>
    </div>
    <div className="contact-card">
      <img 
         style={{
          resizeMode: "cover",
          height: 200,
          width: 300
        }}
        src="https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1907&q=80" />
      <h3>Mr. Darktiger</h3>
      <p>Phone: +4913455874748484</p>
      <p>Email:darktiger@gmail.com</p>
    </div>
    <div className="contact-card">
      <img 
        style={{
          resizeMode: "cover",
          height: 200,
          width: 300
        }}
      src="https://images.unsplash.com/photo-1590767413066-12029959a235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
      <h3>Mr. Redtiger</h3>
      <p>Phone: +4912347888</p>
      <p>Email: redtiger@gmail.com</p>
    </div>
    <div className="contact-card">
      <img 
        style={{
          resizeMode: "cover",
          height: 200,
          width: 300
        }}
      src="https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" />
      <h3>Mr. White tiger</h3>
      <p>Phone:+49123589994</p>
      <p>Email: whitetiger@gmail.com</p>
    </div>
  </div>
  );
}

export default App;

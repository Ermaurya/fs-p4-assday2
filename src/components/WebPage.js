import React from "react";
import ReactDOM from "react-dom";
 const  WebPage =()=>{
    
    let demo = React.createElement(
        "h1", { style: { color: "black" } }, "Welcome to GeeksforGeeks",
        // "h2", { style: { color: "black" } }, "Welcome to GeeksforGeeks"
    )
   
    ReactDOM.render(
        demo,
       
        document.getElementById('root')
    );
    
 }
 export default WebPage;
import React, { Component } from 'react';
import fire from "./firebase";
import "./navbar.css"



class NavBar extends Component {
    logout (){
        fire.auth().signOut();
    }
    render() { 
        return ( 

            <div className="navbar">
                
            
    
                
               
                
              
                <button onClick={this.logout}>Out</button>
                  </div>  
                
            
            
            
         );
         
    }
}

 
export default NavBar
import React , { Component } from "react";
import fire from "./firebase";

import Navbar from './navbar';








class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    logout (){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <>
            
            <Navbar/>
           
           
            </>
            
        )
    }
}
export default Home;

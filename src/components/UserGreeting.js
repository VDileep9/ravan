import React, { Component } from "react";
import Welcome from "./Welcome";

class UserGreeting extends Component {

    constructor(props){
        super (props)
        this.state ={
         isLoggedIn:true
        }
    }

    render(){
        return this.state.isLoggedIn && <div> Welcome ReactJS </div>
        // return this.state.isLoggedIn ?(
        //     <div>Welcome ReactJs</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )



        // let message
        // if (this.state.isLoggedIn){
        //     message=<div>Welcome ReactJs</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>



        // if (this.state.isLoggedIn){
        //     return <div>Welcome React Js </div>   
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // return(
        //     <div>
        //      <div>Welcome React js</div>
        //      <div>Welcome Guest</div>
        //     </div>
        // )
    }    
}
export default UserGreeting
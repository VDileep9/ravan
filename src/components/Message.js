import React,{Component} from 'react';

class Message extends Component {
    
    constructor(){
        super()
        this.state = {
            Message:'I like the Hodophile'
        }
    }
    changeMessage(){
        this.setState({
            Message:'I appricate to Subscribe'
        })
    }
    render(){
        return(
            <div>
            <h2>{this.state.Message}</h2>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
           </div>
   
        )  
    }
}
export default Message
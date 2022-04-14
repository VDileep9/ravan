import React,{Component} from 'react'

 class Counter extends Component {
     constructor(){
         super()
         this.state={
         NandaGopal:0
        }
    }
   increment(){
//     this.setState({
//         NandaGopal:this.state.NandaGopal + 1
//     },()=>{console.log('Chinnari Value',this.state.NandaGopal)})

    this.setState((prevState,props)=>({
        NandaGopal:prevState.NandaGopal+1
    }))
    console.log(this.state.NandaGopal)
    }
    
    incrementThree(){
        this.increment()
    }

    render(){
        return(
            <div>
             <div>NandaGopal - {this.state.NandaGopal}</div>
             <button onClick={()=>this.incrementThree()}>Increment</button>
            </div> 
        )
    }
}
export default Counter
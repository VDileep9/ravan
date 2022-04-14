import  React,{Component} from 'react'

class classClick extends Component{
    clickHandler(){
        console.log('Clicked the button')
    }
 render(){
    return(
        <div>
          <button onClick={this.clickHandler}>Click on</button>
        </div>
    )
 }
}
export default classClick
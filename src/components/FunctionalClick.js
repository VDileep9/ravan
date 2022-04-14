import React from 'react'

function FunctionClick(){
    function clickHandler(){
      console.log("Dileep Singh Takhore")
      console.log("Bihar")
      console.log("Dileep")
      console.log("Singh")
      console.log("Takhore")
    }
 return(
   <div>
     <button onClick={clickHandler}>Click</button>  
   </div>
 )
}
export default FunctionClick
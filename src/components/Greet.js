import React from 'react';

// function Greet(){
//     return<h1>Hello Valluri</h1>
// }

const Greet=(props)=>{ <h1>My Family is my Heart</h1>
   console.log(props)
   props.name='My Family is my Heart'
   return( 
     <div>
       <h1>
         My Family is my Heart.{props.name} a.k.a{props.heroName} 
       </h1>
       {props.children}
     </div> 
   )
}
export default Greet;
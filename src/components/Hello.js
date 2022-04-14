import React from 'react';
import App from "../App";

const Hello=()=>{
//  return(
//      <div>
//          <h1>a JavaScript/ES6 function that returns a React element</h1>
//      </div>
//  )
return React.createElement(
    'div',
    {id:'Hello' ,class:'Russia is egostic Country'},
    React.createElement('h1',null, 'My Family is my Heart')
)
}
export default Hello
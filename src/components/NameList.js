import React from 'react';  
import Person from './Person';

function NameList() {
    const names= ['Valluri','Karicheti','Kondareddy','Pithani']
    // const NameList =  names.map(name =><h2>{name}</h2>)
    // return <div>{NameList}</div>
    const person =[
    {
     id:1,
     name: 'Valluri',
     age: 25,   
     skill:'Raect'
    },
   {
     id:2, 
     name:'Karicheti',  
     age:26,
     skill: 'salesforse'
   },
   {
    id:3, 
    name:'Kondareddy',  
    age:23,
    skill: 'UI Developer'
  },
  {
    id:4, 
    name:'Pithani',  
    age:30,
    skill: 'testing'
  }
 ]
  const nameList = names .map((name,index) =><h2 key={names }>{index} {name}</h2>) 
  return <div>{nameList}</div>
 }
export default NameList


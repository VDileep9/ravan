import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/Parentomponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionalClick/>
        <ClassClick/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <Greet name="Chanakya" heroName="King">
          <p>This the children props</p>
        </Greet>
        <Greet name="Chinnari" heroName="Little girl">
          <button>Valluri</button>
        </Greet>
        <Greet name="Chatura" heroName="Sales Manager"/>
        <Welcome name="Chanakya" heroName="King"/>
        <Welcome name="Chinnari" heroName="Little girl"/>
        <Welcome name="Chatura" heroName="Sales Manager"/>
       */}
        {/* <Welcome>
        <Hello/> */}
     </div> 
    )
  }
}

export default App;

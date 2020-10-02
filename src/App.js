import React from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import store from './store'
import {Provider} from 'react-redux'  //리액트 리덕스 연결해주는거
// import Signup from './components/Signup'
// import SignIn from './components/SignIn'
import Alerts from './components/Alerts'
import BasicElements from './components/Buttons'
import Carousel from './components/Carousel'
// import CustomControls from './components/CustomControls
import Icons from './components/Icons' 
import Inputs from './components/Inputs'
import Landing from './components/Landing'

const App = () =>{
  return <>
  <Provider store = {store}>
  
  <div style = {{width: "1000px", margin: "0 auto"}}>
    <Alerts/><br/><br/>
    <Landing/>
    <BasicElements/>
    <br/><br/>
    <TodoInput/>
    <TodoList/><br/>
    <br/>
    <br/><br/>
    <Inputs/>
    <Carousel/><br/><br/>
    {/* <CustomControls/> */}
    <Icons/>
    <i className="ni ni-building"></i>
    <i className="ni ni-building"></i>
    <i className="ni ni-building"></i>
    <i className="ni ni-building"></i>
  </div></Provider>
  </>
}

export default App;


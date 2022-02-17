// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

//  Todos define here 
  const [todos, setTodos] = useState(
    // [
    // {
    //   sno: 1,
    //   title: "This is first title",
    //   desc: "Description is important part of life 1."
    // },
    // {
    //   sno: 2,
    //   title: "This is Second title",
    //   desc: "Description is important part of life 2."
    // },
    // {
    //   sno: 3,
    //   title: "This is Third title",
    //   desc: "Description is important part of life 3."
    // }

  // ]

  initTodo
  );

//When todos update then call the local storage  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // Add the todos here
  let addTodo = (title, desc)=>{
    console.log("I am add this todo", title, desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno +1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    
    // console.log(myTodo)

    // localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Delete the todo items
  const onDelete = (todo)=>{
    console.log("I am on delete", todo)

    setTodos(todos.filter((e) => {
        return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
 
  return (
  <>
    <Router>
      <Header title = "IS React Todo" searchBar ={true}/>
      <Switch>
          <Route exact path="/" render={()=>{
             return (
              <>
                <AddTodo addTodo = {addTodo}/>
                <Todos todos={todos} onDelete = {onDelete}/>
              </> 
              )}}>
          </Route>
          <Route exact path="/about" render={()=>{
             return (
              <>
                <About/>
              </> 
              )}}>
          </Route>
      </Switch>

      <Footer/>
    </Router>
  </>
  );
}


export default App;
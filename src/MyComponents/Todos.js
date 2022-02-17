import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  let myStyle = {
    minHeight:"70vh"
  }
  return (
  <div className='container' style={myStyle}>
      <h3 className='text-center my-3' >Todo List</h3>
      {props.todos.length ===0? "No todo to display" : 
        props.todos.map((todo)=>{
          return  <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
        }) 
      }
      </div>
  )
}

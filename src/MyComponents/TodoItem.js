import React from 'react';

export default function TodoItem({todo, onDelete}) {
  return (
     <div className='my-5'>
      <h3>{todo.title}</h3>  
      <p>{todo.desc}</p>
      <button type="button" className="btn btn-outline-danger"  onClick={() => onDelete(todo)}>Delete</button>
    </div>);
}

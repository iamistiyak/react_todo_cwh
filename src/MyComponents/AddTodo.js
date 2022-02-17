// import React from 'react';
import React, { useState } from 'react';

export default function AddTodo({addTodo}) {

const [title, setTitle] = useState("")   
const [desc, setDesc] = useState("")  
const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Description is empty")
    }
    else{
        addTodo(title, desc);
        setTitle("")
        setDesc("")
    }

}


  return (
    <div className="container my-10">
     <div className="container text-center my-15 py-15">
         <h3>Add Todos</h3>
     </div>
        <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Todo title</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={title} 
              onChange={(e)=>{
                  setTitle(e.target.value)
              }}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Todo description</label>
              <input type="text" className="form-control" id="exampleInputPassword1" name="desc" value={desc}
              onChange={(e)=>{
                setDesc(e.target.value)
            }}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    </div>
   
  );
}

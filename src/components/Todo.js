import React, { useEffect, useState } from "react";
import Login from "./Login";

const Todo = () => {
    const[ todoList, setTodoList ]=useState(JSON.parse(localStorage.getItem("todolist"))||[]);
    const[ textInput, setTextInput ]=useState('');
    const addTodo=()=>{
        setTodoList([...todoList,textInput]);
        setTextInput('');
        console.log([...todoList,textInput]);
        if (!textInput) return ;
    
    }
    useEffect(() => {
        
        if(todoList){
            localStorage.setItem('todolist',JSON.stringify(todoList));
        }
    }, [todoList])

    

    
  return (
    <div>
      <header className="bg-dark">
        <div className="container py-5 text-white">
          <h1 className="display-4">Todo App</h1>
        </div>
      </header>
      <div className="container">
        <div className="card">
            <div className="card-header">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Add Work ToDo" onChange={e=> setTextInput(e.target.value)} value={textInput} />
                    <button className="btn btn-primary"onClick={addTodo}> Add</button>
                </div>
            </div>
            <div className="card-body">
                {
                    todoList.map((todo)=>(
                        <div>
                            <input type="checkbox"/>&nbsp;&nbsp;
                            <label className="h5">{todo}</label>
                        </div>
                    ))
                }

            </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
import React from 'react'
import { FormControl, Button } from 'react-bootstrap'
import Main from "./Main";
import { useState } from 'react';



const Header = () => {

    const [todoList, setTodoList] = useState([]);
    const [newtodo, setNewtodo] = useState("");


    const addTodo = () => {
        setTodoList((prevTodoList) => [...prevTodoList, {id : 1, todo:newtodo, isEditable: false, isCompleted: false}]);
        setNewtodo("");
    };


  return (
    <div>
        <h1>To Do List</h1>
        <div className="d-flex w-50 mt-5">
            <FormControl size="lg" type="text" placeholder="To do Input" value={newtodo} onChange={(e) => setNewtodo(e.target.value)} />
            <Button className="ms-5" variant="danger" onClick={() => addTodo()}>Add To do</Button>
        </div>
        <div>
            {todoList.map((todoItem) => (
                <Main />
            ))}
        </div>
    </div>
  )
}

export default Header
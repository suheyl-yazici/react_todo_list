import React, { useEffect, useState } from 'react'
import { FormControl, Button } from 'react-bootstrap'
import Main from "./Main";
import { v4 as uuidv4 } from 'uuid';


const Header = () => {

    const [todoList, setTodoList] = useState([]);
    const [newtodo, setNewtodo] = useState("");

    useEffect(() => {},[todoList]);

    const addTodo = () => {
        setTodoList((prevTodoList) => [...prevTodoList, {id : uuidv4(), todo:newtodo, isEditable: false, isCompleted: false},]);
        setNewtodo("");
    };

    
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 text-capitalize fs-4" style={{fontFamily:"Lobster Two"}}>
        <h1 className="mt-5 fw-bold">TO DO LİST</h1>
        <div className="d-flex w-50 mt-5">
            <FormControl placeholder="To Do Input" value={newtodo}
                onChange={(e) => setNewtodo(e.target.value)} />

            <Button className="ms-3" variant="primary" onClick={() => addTodo()}>Add To do</Button>
        </div>
        <div className="mt-5 w-75">
            {todoList.map((todoItem) => (
                <Main todoItem={todoItem} setTodoList={setTodoList} />
            ))}
        </div>
    </div>
  )
}

export default Header
import {useState} from 'react'
import { Form,FormControl } from 'react-bootstrap'
import { ReactComponent as DeleteIcon } from "../assets/DeleteIcon.svg";
import { ReactComponent as EditIcon } from "../assets/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../assets/SaveIcon.svg";


const Main = ({todoItem, setTodoList}) => {

  
  const [todo, setTodo] = useState("");

  const completedTodo = (id) => {
    setTodoList((prevTodoList) => prevTodoList.map((todoItem) =>todoItem.id === id 
        ? {...todoItem, isCompleted: !todoItem.isCompleted } : todoItem))
};


  const editTodo = (id , oldTodo) => {
    setTodoList((prevTodoList) => 
        prevTodoList.map((todoItem) => 
            todoItem.id === id ? {...todoItem, isEditable: !todoItem.isEditable} : todoItem));
    setTodo(oldTodo);
  };


  const saveTodo = (id) => {
    setTodoList(prevTodoList => prevTodoList.map( todoItem => todoItem.id === id ? {...todoItem,isEditable : !todoItem.isEditable, todo: todo} : todoItem))
  }

  const deleteTodo = (id) => {
    setTodoList( prevTodoList => prevTodoList.filter(todoItem => todoItem.id !== id))
  }


  return (
    <div key={todoItem.id} className="d-flex justify-content-between mt-3 bg-light bg-gradient">
        <div className='d-flex w-75'>
            <Form.Check
                type="checkbox"
                className="me-2"
                value={todoItem.isCompleted}
                onChange={() => completedTodo(todoItem.id)}
                />
                {
                  !todoItem.isEditable ? <label className={`${todoItem.isCompleted ? "text-decoration-line-through" : ""} fw-bold}`}>
                  {todoItem.todo}
                  </label>
                  : <FormControl value={todo} onChange={(e) => setTodo(e.target.value)} />
                }
          </div>
          
          <div>
            {
            !todoItem.isEditable 
              ? (
                <EditIcon width={25} height={25} style={{cursor: "pointer" }} className= "me-2 " 
                 onClick={() => editTodo(todoItem.id, todoItem.todo)} /> ) 
              : (
                <SaveIcon width={25} height={25} style={{cursor: "pointer" }} className= "me-2"
                onClick={() => saveTodo(todoItem.id)} /> )}

                <DeleteIcon width={25} height={25} style={{cursor: "pointer" }} 
                onClick={() => deleteTodo(todoItem.id)} />
          </div>
    </div>
  )
}

export default Main
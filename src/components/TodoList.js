import React from "react";
import "./Todo"
import Todo from "./Todo";



const TodoList = ({todos, setTodos, filteredTodos}) => {

 //console.log(todos);


    return(

        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} key={todo.id} text={todo.text} todo={todo} id={todo.id}/>
                ))}
            </ul>
        </div>

    );
};

export default TodoList;

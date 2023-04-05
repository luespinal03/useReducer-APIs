import React from "react";
import "./TodoCard.css";

function TodoCard(props) {
    return (
        <div className='todo-card-container'>
            <div className='todo-card'>
                <div className='todo-info'>
                    <h2 className='todo-title'>{props.title}</h2>
                    <p className='todo-completed'>
                        {props.completed ? "Completed" : "Incomplete"}
                    </p>
                    <p className='todo-id'>
                        Todo# {props.id} by user# {props.userId}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TodoCard;
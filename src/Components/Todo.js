import React from "react";
import { useState } from "react";


export function Todo() {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
  

   const handleInput = (e) => {
        
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'you need javaScript skill to complete the task. Do you have it?' : '';

        setTodo(inputValue);
        setWarning(warning);

    }


    return (
        <div>
            <p> {todo}</p>
            <p> 
                <textarea name='todo' value={todo} onChange={handleInput}> </textarea>
            </p>
            <hr />
            <h2>{warning || 'Good Choice!'}</h2>
        </div>
    );
}



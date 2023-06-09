import React, { useState } from "react";

export default function TodoForm(props) {
  
  const [input, setInput] = useState("");


  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 1000000),
      text: input,
      isComplete: false
    })
    setInput('')
  }

  return (
    <form className="task-form">
      <input type="text" placeholder="Add a task" onChange={handleChange} className="task-input" value={input} name="text" />
      <button type="submit" onClick={handleSubmit} className="task-btn" >ADD Task</button>
    </form>
  );
}

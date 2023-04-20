import React from 'react';
import { useState } from 'react/cjs/react.development';
import Todo from './Todo';
import To_DoForm from './To_DoForm'

export default function TodoList() {


  
  const [todos, setTodos] = useState([]);


  
  const addTask = task => {
    if (!task.text) {
      return
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  }

  
  const removeTask = id => {
    let updated = [...todos].filter(task => task.id !== id)
    setTodos(updated)
  }

  
  const compTask = id => {
    let updated = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    })
    setTodos(updated)

  }


  return <div>
    <To_DoForm addTask={addTask}></To_DoForm>
    <Todo todos={todos} completeTask={compTask} removeTask={removeTask} ></Todo>
  </div>;
}

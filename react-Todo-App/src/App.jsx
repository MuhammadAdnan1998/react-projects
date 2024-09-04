import { useState } from 'react';
import TodoInput from '../components/todo-input';
import './App.css'


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Reading Book",
      id: Date.now(),
      completed: false,
    }
  ]);

  const handleAddTodo = () => {
    const todosArr = [...todos, {
      todo,
      id: Date.now(),
      completed: false,
    }]

    setTodos([...todosArr])
    setTodo("");
  }
  return (
    <div className='w-3/4 mx-auto'>
      <h1 className='font-bold text-3xl'>App Todo</h1>

      <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} onClick={() => console.log("cicked on add todo button")} />
      <todo-list todos={todos} />

    </div>
  );
}

export default App

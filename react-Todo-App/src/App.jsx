import { useCallback, useState } from 'react';
import './App.css'
import TodoInput from '../components/todo-input';
import TodoInput from '../components/todo-list';



function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Reading Book",
      id: Date.now(),
      completed: false,
    }
  ]);

  const handleAddTodo = useCallback(() => {
    const todosArr = [...todos, {
      todo,
      id: Date.now(),
      completed: false,
    }]

    setTodos([...todosArr])
    setTodo("");
  },[todo]);

  const handleOnDelete= useCallback((id)=>{
    // console.log("Id=>",id);
    const filter= todos.filter((data)=> data.id !==id)
    // console.log("filter",filter);
    setTodos([...filter]);
  },[todos]);

  const handleOnToggleTodo = useCallback((id)=>{
    console.log("id on clicking todo", id);
    const todosArr=[...todos];
    const todoInd = todosArr.findIndex((data)=data.id==id);
    todosArr[todoInd].completed = !todosArr[todoInd].completed
    setTodos([...todosArr]);
    console.log("Todo Clicked>",todoInd);
    console.log("todoArr>",todosArr);

    
  },[todos]);




  return (
    <div className='w-3/4 mx-auto'>
      <h1 className='font-bold text-3xl'>App Todo</h1>

      <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} onClick={() => console.log("cicked on add todo button")} />
      <todo-list todos={todos} />

      <todo-list
      toggleTodo={handleOnToggleTodo}
       todos={todos} onDelete={handleOnDelete}/>
    </div>
  );
}

export default App

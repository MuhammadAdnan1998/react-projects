function TodoList({todos}){
    return(
        <>
        {todos.map((todo,ind)=> {
          return(
            <div key={todo.id} className='flex my-2 bg-slate-100'>
              <h3 className='text-2xl text-left py-2 pl-2 font-mono font-medium flex-1'>{todo.todo}</h3>
              <button className='bg-red-200 rounded-sm p-2 px-4'>Delete Todo</button>
            </div>
          )
        })
      }
        </>
    )
}

export default todo-list
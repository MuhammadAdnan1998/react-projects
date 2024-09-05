import { useEffect } from "react";

function TodoInput(onchange,onclick,value){


    return(
        <div className='my-3'>
        <input 
        onChange={{onchange}}
        className='border rounded-sm p-2' placeholder="Add Todo" value={value} />
        <button 
        onClick={onclick}
        disabled={value === ""}
        style={{backgroundColor:  value==="" && "gray"}}
        className='p-2 px-3 ml-2 rounded-sm bg-teal-200'></button>
      </div>
    )
}

export default TodoInput;
function QuizAppUi() {
    return (
      <div id="quizContainer" class="bg-[white] w-11/12 items-center max-w-xl mt-[100px] mx-auto border rounded p-30">
        <h1 className="pl-2 text-xl m-4">Simple Quiz</h1>
        <hr />
        <h1 className="pl-2 text-lg m-4 font-semibold">What brings you in a good mood?</h1>
        <ul className="pl-2 m-4">
          <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Gym</li>
          <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Swimming</li>
          <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Study</li>
          <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Coding</li>
        </ul>
      </div>
    )
  }
  
  export default QuizAppUi;
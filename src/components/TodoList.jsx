import './TodoList.css';

function TodoList() {

    const todos = [
        { task: "Wash dishes", done: false },
        { task: "Make a website", done: true },
    ]

    function handleClick() {
        console.log("TodoList handleClick is running!");
    }

    return (
        <div className="todos">
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo.done ? "✓  " : "○ "}
                            {todo.task}
                            <button onClick={handleClick}></button>
                        </li>
                    );
                    })}
            </ul>

        </div>
    )
}

export default TodoList;
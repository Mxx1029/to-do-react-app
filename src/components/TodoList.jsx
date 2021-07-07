import './TodoList.css';

function TodoList() {

    const todos = [
        { task: "Wash dishes", done: false },
        { task: "Make a website", done: true },
    ]

    function handleClick() {
        console.log("Clickety click");
    }

    return (
        <div className="todos">
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index} onClick={handleClick}>
                            {todo.done ? "✓  " : "○ "}
                            {todo.task}
                        </li>
                    );
                    })}
            </ul>

        </div>
    )
}

export default TodoList;
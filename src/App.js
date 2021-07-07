import './App.css';
import CreateTodo from './components/CreateTodo.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className="App">
      <h1>Codelicious TODO</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;

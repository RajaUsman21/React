

import { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Todo List</h1>
      <div className="flex w-full max-w-md mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l text-red-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your todo..."
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span className="flex-grow">{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
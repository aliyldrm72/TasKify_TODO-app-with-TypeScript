import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <footer>
        {" "}
        <h1>This App created BY Ali YILDIRIM</h1>
      </footer>
    </div>
  );
};

export default App;

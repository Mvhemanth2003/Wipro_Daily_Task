
import React, { useState, useEffect } from "react";
import dispatcher from "./Dispatcher";

const store = {
  todos: [],
  listeners: [],

  addChangeListener(callback) {
    this.listeners.push(callback);
  },

  emitChange() {
    this.listeners.forEach((callback) => callback());
  },

  handleAction(action) {
    if (action.type === "ADD_TODO") {
      this.todos.push(action.payload);
      this.emitChange();
    }
  },
};

dispatcher.register(store.handleAction.bind(store));

function App() {
  const [todos, setTodos] = useState(store.todos);
  const [text, setText] = useState("");

  useEffect(() => {
    store.addChangeListener(() => setTodos([...store.todos]));
  }, []);

  const addTodo = () => {
    if (text.trim() === "") return;
    dispatcher.dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Flux Todo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
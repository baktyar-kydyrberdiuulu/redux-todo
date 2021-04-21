import "./App.css";
import  Counter  from "./components/Counter";
import { Provider } from "react-redux";
import {createStore}  from "redux";
import  rootReducer from "./store/reducers";
import TodoList from "./components/TodoList";
import { useState } from "react";
const store = createStore(rootReducer);
function App() {
  const [switchComponent, setSwitch] = useState(false);
  return (
    // Providing store to all components in App.js
    <Provider store={store}>
      <button
        style={{ marginBottom: 20 }}
        onClick={() => setSwitch(!switchComponent)}
      >
        swicth
      </button>
      {/* conditional rendering */}
      {switchComponent ? <Counter /> : <TodoList />}
    </Provider>
  );
}
export default App;

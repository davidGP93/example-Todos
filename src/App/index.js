import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'Tomar curso react', completed: false },
//   { text: 'Tomar curso con CSS', completed: false },
//   { text: 'hacer curso de JS', completed: false },
//   { text: 'hacer la comida', completed: false }
// ]


function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}


export default App;

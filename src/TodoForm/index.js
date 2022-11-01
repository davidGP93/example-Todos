import React from "react";
import { TodoContext} from '../TodoContext'
import './TodoForm.css'
function TodoForm() {

    const [newTodoValue, setnewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
      } = React.useContext(TodoContext);


    const onChange = (event) => {
        setnewTodoValue(event.target.value);   
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // la funcion preventDefault() ayuda a prevenir que se recargue la pagina cuando se active el evento onClick
        addTodo(newTodoValue);
        setOpenModal(false);
    };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Escriba aqui su Todo" />

      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        <button className="TodoForm-button TodoForm-button--add" type="submit" onClick={onSubmit}>Añadir Todo</button>
      </div>
    </form>
  );
}

export { TodoForm };

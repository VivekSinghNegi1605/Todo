import { useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form action="" className="row my-row" onSubmit={handleAddButtonClicked}>
        <div className="col-sm-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-sm-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-success my-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

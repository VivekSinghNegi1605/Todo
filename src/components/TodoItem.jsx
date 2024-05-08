import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.dueDate}
            key={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;

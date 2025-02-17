import { useReducer } from "react";

const initialTodos = [
  { id: 1, name: "Learn React", completed: false },
  { id: 2, name: "Build a todo app", completed: false },
];


function reducer(state, action) {
  switch (action.type) {
    case "added_todo": {
      return [
        ...state,
        {
          id: Date.now(),
          name: action.name,
          completed: false,
        },
      ];
    }
    case "deleted_todo": {
      return state.filter((todo) => todo.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  function handleAddTodo(e) {
    e.preventDefault();
    const name = e.target.elements.todoName.value;
    dispatch({
      type: "added_todo",
      name: name,
    });
    e.target.reset();
  }

  function handleDeleteTodo(id) {
    dispatch({
      type: "deleted_todo",
      id: id,
    });
  }

  return (
    <>
      <p>
        Todo App: The component allows users to add new todos by entering text
        in the input field and clicking the <b>"Add Todo"</b> button.{" "}
        <p>
          Each todo item in the list has a <b>"Delete"</b> button to remove it
          from the list. The state is updated accordingly using the reducer
          function.
        </p>
      </p>
      <h3>Todo lists</h3>
      <form onSubmit={handleAddTodo}>
        <input name="todoName" placeholder="Enter a new todo" />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.id} - {todo.name}{" "}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </p>
      ))}
    </>
  );
}

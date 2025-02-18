# ReactLab useReducer ToDoApp

## Reducer

A reducer is a function that manages state updates in React applications, particularly when using the useReducer hook. It takes two arguments: the current state and an action object, and returns the new state based on the action type.

The basic structure of a reducer function is as follows:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      return { ...state, /* updated state */ };
    case 'ACTION_TYPE_2':
      return { ...state, /* updated state */ };
    default:
      return state;
  }
}
```

Key aspects of reducers:

1. Pure function: A reducer should be a pure function, meaning it doesn't modify the existing state but returns a new state object.

2. Action object: The action typically contains a 'type' property and optional payload data.

3. State updates: The reducer calculates the next state based on the current state and the dispatched action.

4. Switch statement: Reducers often use a switch statement to handle different action types.

5. Immutability: State updates should be done immutably, often using the spread operator (...) to create new objects or arrays.

When used with the useReducer hook, the reducer function is passed as an argument along with the initial state:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

The useReducer hook returns an array containing the current state and a dispatch function. The dispatch function is used to send actions to the reducer, triggering state updates.

Reducers are particularly useful for managing complex state logic, especially when state transitions depend on previous states or when dealing with deeply nested state objects.

# Used tools

## React Hooks and State Management
1. **useReducer**: This is a React hook used for managing complex state logic. It's an alternative to useState, especially useful when the next state depends on the previous one.

   ```javascript
   const [todos, dispatch] = useReducer(reducer, initialTodos);
   ```

   Here, `todos` is the current state, and `dispatch` is a function to send actions to the reducer.

## Functions and Arrow Functions
2. **Arrow Functions**: These are used throughout the code for concise function declarations. For example:

   ```javascript
   (todo) => todo.id !== action.id
   ```

   This is an arrow function used in the `filter` method.

## Array Methods
3. **filter**: An array method used to create a new array with all elements that pass the test implemented by the provided function.

   ```javascript
   return state.filter((todo) => todo.id !== action.id);
   ```

   This filters out the todo with the specified id.

## Destructuring and Spread Operator
4. **Destructuring**: Used to extract values from objects or arrays into distinct variables.

   ```javascript
   const { todoName } = e.target.elements;
   ```

   This extracts the `todoName` property from `e.target.elements`.

5. **Spread Operator**: Used to expand an array or object.

   ```javascript
   return [
     ...state,
     {
       id: Date.now(),
       name: action.name,
       completed: false,
     },
   ];
   ```

   Here, it's used to create a new array with all existing todos plus a new one.

## JSX and React Components
6. **JSX**: The entire return statement in the `TodoApp` component is written in JSX, which allows writing HTML-like code in JavaScript.

7. **Functional Component**: The `TodoApp` is a functional component, which is the modern way of writing React components.

## HTML and Form Handling
8. **HTML form tag**: Used to create a form for adding new todos.

   ```jsx
   <form onSubmit={handleAddTodo}>
     {/* form contents */}
   </form>
   ```

9. **Event Handling**: The `onSubmit` event of the form and `onClick` event of the delete button are handled using custom functions.

## Other JavaScript Concepts
10. **Template Literals**: Used in the error message:

    ```javascript
    throw Error("Unknown action: " + action.type);
    ```

11. **Map Function**: Used to render the list of todos:

    ```jsx
    {todos.map((todo) => (
      // JSX for each todo
    ))}
    ```

This code demonstrates a good use of modern React and JavaScript features to create a functional and efficient todo application.

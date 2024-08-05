import {ITodo, TodoActionTypes} from '../actions/todo.action';

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'FETCH_TODO':
      return {
        ...state,
        todos: action.payload,
      };
    case 'MARK_AS_COMPLETE':
      // const todo = state.todos.find(t => t.id === action.payload);
      // if (todo) {
      //   todo?.subtasks.forEach(subtask => {
      //     subtask.isCompleted = !subtask.isCompleted;
      //   });
      //   todo!.isCompleted = !todo.isCompleted;
      // }

      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                isCompleted: !todo.isCompleted,
                subtasks: todo.subtasks.map(subtask => ({
                  ...subtask,
                  isCompleted: !subtask.isCompleted,
                })),
              }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;

import {ADD_TODO, FETCH_TODO} from '../actiontypes/todo.action.types';

export interface ITodo {
  id: string;
  title: string;
  dueDate: string;
  isCompleted: boolean;
  description: string;
  subtasks: ISubtask[];
}

export interface ISubtask {
  id: string;
  name: string;
  isCompleted: boolean;
  type: string;
}

interface ITodoAction {
  payload: ITodo | ITodo[] | string;
  type: string;
}

export type TodoActionTypes = ITodoAction;

export const addTodo = (todo: ITodo): TodoActionTypes => {
  return {
    payload: todo,
    type: ADD_TODO,
  };
};

export const fetchTodo = (todos: ITodo[]): TodoActionTypes => {
  return {
    payload: todos,
    type: FETCH_TODO,
  };
};

export const markAsComplete = (id: string): TodoActionTypes => {
  return {
    payload: id,
    type: 'MARK_AS_COMPLETE',
  };
};

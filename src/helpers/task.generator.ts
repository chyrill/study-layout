import {faker} from '@faker-js/faker';
import {ISubtask, ITodo} from '../store/actions/todo.action';

export const generateRandomTodos = (count: number): ITodo[] => {
  const todos: ITodo[] = [];

  for (let i = 0; i < count; i++) {
    const todo: ITodo = {
      id: i.toString(),
      title: faker.word.words(faker.number.int({min: 1, max: 3})),
      description: faker.lorem.paragraphs(
        faker.number.int({min: 2, max: 10}),
        '</br>',
      ),
      dueDate: faker.date.future().toISOString(),
      isCompleted: faker.datatype.boolean(),
      subtasks: generateSubtasks(faker.number.int({min: 0, max: 5})),
    };

    todos.push(todo);
  }

  return todos;
};

const subtaskTypes = ['doc', 'email', 'link'];

const generateSubtasks = (count: number): ISubtask[] => {
  const subtasks: ISubtask[] = [];

  for (let i = 0; i < count; i++) {
    const subtask: ISubtask = {
      id: i.toString(),
      isCompleted: false,
      name: faker.company.buzzPhrase(),
      type: subtaskTypes[
        faker.number.int({min: 0, max: subtaskTypes.length - 1})
      ],
    };
    subtasks.push(subtask);
  }

  return subtasks;
};

export const subTaskTypeIcon: Record<string, string> = {
  doc: 'file-text-o',
  email: 'envelope-o',
  link: 'link',
};

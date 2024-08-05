import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Todo from '.';
import {generateRandomTodos} from '../../helpers/task.generator';
import {faker} from '@faker-js/faker';
import {fetchTodo} from '../../store/actions/todo.action';

const TodoWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const _randomTodos = generateRandomTodos(
      faker.number.int({min: 10, max: 20}),
    );
    //@ts-ignore
    dispatch(fetchTodo(_randomTodos));
  }, [dispatch]);

  return <Todo />;
};

export default TodoWrapper;

import { List } from '@mantine/core';
import { TodoItem } from '../TodoItem';
import { TodoWrapper } from '../TodoWrapper';

export const Todos = () => {
  const todo = (
    <TodoWrapper>
      <TodoItem />
    </TodoWrapper>
  );
  const todos = [todo, todo];

  return <List>{todos}</List>;
};

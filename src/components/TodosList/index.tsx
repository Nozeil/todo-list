import { List } from '@mantine/core';
import { TodoItem } from '../TodoItem';
import { TodoWrapper } from '../TodoWrapper';
import { useContext } from 'react';
import { TodosContext } from '@/context';

export const Todos = () => {
  const todos = useContext(TodosContext);

  return (
    <List>
      {todos.map((item, index) => (
        <TodoWrapper key={index}>
          <TodoItem initialValue={item.initialValue} initialIsChecked={item.initialIsChecked} />
        </TodoWrapper>
      ))}
    </List>
  );
};

import { List } from '@mantine/core';
import { TodoItem } from '../TodoItem';
import { TodoWrapper } from '../TodoWrapper';
import { useContext } from 'react';
import { TodosContext } from '@/context';
import { v4 as uuidv4 } from 'uuid';

export const Todos = () => {
  const todos = useContext(TodosContext);

  return (
    <List>
      {todos.map((item) => {
        const id = uuidv4();

        return (
          <TodoWrapper key={id}>
            <TodoItem initialValue={item.initialValue} initialIsChecked={item.initialIsChecked} />
          </TodoWrapper>
        );
      })}
    </List>
  );
};

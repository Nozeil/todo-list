import { Title } from '@mantine/core';
import { useContext } from 'react';
import { TodosContext } from '@/context';
import { setTodos } from '@/services';
import useBeforeUnload from '@/hooks';
import { TodoList } from './List';

export const Todos = () => {
  const todos = useContext(TodosContext);

  useBeforeUnload(() => setTodos(todos));

  const content = todos.length ? (
    <TodoList todos={todos} />
  ) : (
    <Title
      size="h2"
      align="center"
      italic
      sx={(theme) => ({
        color: theme.colors.gray[3],
      })}
    >
      Your todo list is empty.
    </Title>
  );

  return content;
};

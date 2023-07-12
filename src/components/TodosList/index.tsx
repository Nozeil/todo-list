import { List } from '@mantine/core';
import { TodoItem } from '../TodoItem';
import { useContext } from 'react';
import { TodosContext } from '@/context';
import { PaperWrapper } from '../PaperWrapper';
import { useStyles } from './stylesHook';
import { setTodos } from '@/services';
import useBeforeUnload from '@/hooks';

export const Todos = () => {
  const todos = useContext(TodosContext);
  const { classes } = useStyles();
  const classNames = { root: classes.root, itemWrapper: classes.itemWrapper };

  useBeforeUnload(() => setTodos(todos));

  return (
    <PaperWrapper>
      <List classNames={classNames} listStyleType="none" spacing={10}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            initialValue={item.initialValue}
            initialIsChecked={item.initialIsChecked}
          />
        ))}
      </List>
    </PaperWrapper>
  );
};

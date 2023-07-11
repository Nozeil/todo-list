import { List } from '@mantine/core';
import { TodoItem } from '../TodoItem';
import { useContext } from 'react';
import { TodosContext } from '@/context';
import { v4 as uuidv4 } from 'uuid';
import { TodoWrapper } from '../TodoWrapper';
import { useStyles } from './stylesHook';

export const Todos = () => {
  const { initialTodos } = useContext(TodosContext);
  const { classes } = useStyles();
  const classNames = { root: classes.root, itemWrapper: classes.itemWrapper };

  return (
    <TodoWrapper>
      <List classNames={classNames} listStyleType="none" spacing={10}>
        {initialTodos.map((item) => {
          const id = uuidv4();

          return (
            <TodoItem
              key={id}
              initialValue={item.initialValue}
              initialIsChecked={item.initialIsChecked}
            />
          );
        })}
      </List>
    </TodoWrapper>
  );
};

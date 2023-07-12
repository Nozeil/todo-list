import type { TodosState } from '@/types';
import { useStyles } from './stylesHook';
import { TodoItem } from '@/components/TodoItem';
import { List } from '@mantine/core';
import { Label } from '../Label';
import { PaperWrapper } from '@/components/PaperWrapper';

interface Props {
  todos: TodosState;
}

export const TodoList = ({ todos }: Props) => {
  const { classes } = useStyles();
  const classNames = { root: classes.root, itemWrapper: classes.itemWrapper };

  return (
    <PaperWrapper>
      <List classNames={classNames} listStyleType="none" spacing={10}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            label={
              <Label
                id={item.id}
                initialValue={item.initialValue}
                initialIsChecked={item.initialIsChecked}
              />
            }
            id={item.id}
            initialValue={item.initialValue}
            initialIsChecked={item.initialIsChecked}
          />
        ))}
      </List>
    </PaperWrapper>
  );
};

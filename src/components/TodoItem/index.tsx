import { Checkbox, List } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './stylesHook';
import type { TodoItemState } from '@/types';
import { useContext, type ReactNode } from 'react';
import { TodosDispatchContext } from '@/context';
import { ActionTypes } from '@/constants';

interface Props extends TodoItemState {
  label: ReactNode;
}

export const TodoItem = ({ label, id, initialIsChecked, initialValue }: Props) => {
  const [isChecked, handlers] = useDisclosure(initialIsChecked);
  const dispatch = useContext(TodosDispatchContext);
  const { classes } = useStyles();

  const classNames = {
    root: classes.root,
    body: classes.body,
    label: classes.label,
    labelWrapper: classes.labelWrapper,
    input: classes.input,
  };

  const checkboxOnChange = () => {
    dispatch({
      type: ActionTypes.UPDATE,
      payload: { id, initialValue, initialIsChecked: !isChecked },
    });
    handlers.toggle();
  };

  return (
    <List.Item>
      <Checkbox
        w="100%"
        size="md"
        radius="lg"
        classNames={classNames}
        checked={isChecked}
        label={label}
        onChange={checkboxOnChange}
        onClick={(e) => console.log(e.target)}
      />
    </List.Item>
  );
};

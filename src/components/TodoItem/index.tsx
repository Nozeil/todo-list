import { Checkbox, Group, List, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './stylesHook';
import type { TodoItemState } from '@/types';
import { useState, type ChangeEvent, useContext } from 'react';
import { TodosDispatchContext } from '@/context';
import { ActionTypes } from '@/constants';
import { DeleteButton } from './buttons';

export const TodoItem = ({ id, initialIsChecked, initialValue }: TodoItemState) => {
  const [isChecked, handlers] = useDisclosure(initialIsChecked);
  const [value, setValue] = useState(initialValue);
  const dispatch = useContext(TodosDispatchContext);
  const { classes } = useStyles();

  const classNames = { root: classes.root, labelWrapper: classes.labelWrapper, body: classes.body };
  const td = isChecked ? 'line-through' : 'none';

  const checkboxOnChange = () => {
    dispatch({
      type: ActionTypes.UPDATE,
      payload: { id, initialValue: value, initialIsChecked: !isChecked },
    });
    handlers.toggle();
  };

  const areaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const onBlur = () => {
    if (initialValue !== value) {
      dispatch({
        type: ActionTypes.UPDATE,
        payload: { id, initialValue: value, initialIsChecked: isChecked },
      });
    }
  };

  const onClick = () => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: id,
    });
  };

  return (
    <List.Item>
      <Checkbox
        w="100%"
        size="md"
        classNames={classNames}
        checked={isChecked}
        label={
          <Group noWrap spacing="sm">
            <Textarea
              value={value}
              onChange={areaOnChange}
              onBlur={onBlur}
              size="lg"
              autosize
              variant="filled"
              disabled={isChecked}
              td={td}
              sx={{ flexGrow: 1 }}
            />
            <DeleteButton onClick={onClick} />
          </Group>
        }
        onChange={checkboxOnChange}
      />
    </List.Item>
  );
};

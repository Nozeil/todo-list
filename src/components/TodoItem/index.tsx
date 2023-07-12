import { Checkbox, List, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Label } from './Label';
import { useStyles } from './stylesHook';
import type { TodoItemState } from '@/types';
import { useState, type ChangeEvent, useContext } from 'react';
import { TodosDispatchContext } from '@/context';
import { ActionTypes } from '@/constants';
import { DeleteButton } from './Label/buttons/Delete';

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
      payload: { id, initialValue: value, initialIsChecked: isChecked },
    });
    handlers.toggle();
  };

  const areaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const onBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currValue = e.currentTarget.value;
    if (value !== currValue) {
      dispatch({
        type: ActionTypes.UPDATE,
        payload: { id, initialValue: value, initialIsChecked },
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
          <Label>
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
          </Label>
        }
        onChange={checkboxOnChange}
      />
    </List.Item>
  );
};

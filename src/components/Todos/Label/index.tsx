import { Group, Textarea } from '@mantine/core';
import { ChangeEvent, useContext, useState } from 'react';
import { TodosDispatchContext } from '@/context';
import { ActionTypes } from '@/constants';
import type { TodoItemState } from '@/types';
import { DeleteButton } from './DeleteButton';
import { KeyboardEvent } from 'react';

export const Label = ({ id, initialValue, initialIsChecked }: TodoItemState) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useContext(TodosDispatchContext);
  const td = initialIsChecked ? 'line-through' : 'none';

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const onBlur = () => {
    if (initialValue !== value) {
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

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <Group noWrap spacing="sm">
      <Textarea
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onBlur={onBlur}
        size="lg"
        autosize
        variant="filled"
        disabled={initialIsChecked}
        td={td}
        sx={{ flexGrow: 1 }}
      />
      <DeleteButton onClick={onClick} />
    </Group>
  );
};

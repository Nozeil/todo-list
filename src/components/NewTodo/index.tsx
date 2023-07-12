import { TextInput } from '@mantine/core';
import { PaperWrapper } from '../PaperWrapper';
import { AddButton } from './buttons/Add';
import { useState, type ChangeEvent, useContext, KeyboardEvent } from 'react';
import { TodosDispatchContext } from '@/context';
import { ActionTypes } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export const NewTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useContext(TodosDispatchContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const interedValue = e.currentTarget.value;
    setValue(interedValue);
  };

  const addTodo = () => {
    dispatch({
      type: ActionTypes.ADD,
      payload: { id: uuidv4(), initialValue: value, initialIsChecked: false },
    });
    setValue('');
  };

  const onClick = () => addTodo();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === 'Enter') {
      addTodo();
      e.currentTarget.blur();
    }
  };

  return (
    <PaperWrapper>
      <TextInput
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder="Add task..."
        size="xl"
        variant="filled"
        rightSection={<AddButton onClick={onClick} />}
      />
    </PaperWrapper>
  );
};

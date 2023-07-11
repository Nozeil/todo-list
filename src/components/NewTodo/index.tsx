import { TextInput } from '@mantine/core';
import { PaperWrapper } from '../PaperWrapper';
import { AddButton } from './buttons/Add';
import { useState, type ChangeEvent, useContext, KeyboardEvent } from 'react';
import { TodosContext } from '@/context';

export const NewTodo = () => {
  const [value, setValue] = useState('');
  const { initialTodos, setInitialTodos } = useContext(TodosContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const interedValue = e.currentTarget.value;
    setValue(interedValue);
  };

  const addTodo = () => {
    const todo = { initialValue: value, initialIsChecked: false };
    const newTodos = [...initialTodos, todo];
    setInitialTodos(newTodos);
    setValue('');
  };

  const onClick = () => {
    addTodo();
  };

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

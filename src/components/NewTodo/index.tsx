import { TextInput } from '@mantine/core';
import { TodoWrapper } from '../TodoWrapper';
import { AddButton } from './buttons/Add';

export const NewTodo = () => {
  return (
    <TodoWrapper>
      <TextInput
        placeholder="Add task..."
        size="lg"
        variant="filled"
        rightSection={<AddButton />}
      />
    </TodoWrapper>
  );
};

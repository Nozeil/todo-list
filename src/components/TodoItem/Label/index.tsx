import { DeleteButton } from '@/components/TodoItem/Label/buttons/Delete';
import { EditButton } from '@/components/TodoItem/Label/buttons/Edit';
import { Group, TextInput } from '@mantine/core';
import { type ChangeEvent, useState } from 'react';

interface Props {
  isChecked: boolean;
}

export const Label = ({ isChecked }: Props) => {
  const [value, setValue] = useState('');
  const td = isChecked ? 'line-through' : 'none';

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const value = e.currentTarget.value;
    setValue(value);
  };

  return (
    <Group w="100%" spacing="sm">
      <TextInput
        value={value}
        onChange={onChange}
        size="lg"
        variant="filled"
        disabled={isChecked}
        rightSection={<EditButton />}
        td={td}
        sx={{ flexGrow: 1 }}
      />
      <DeleteButton />
    </Group>
  );
};

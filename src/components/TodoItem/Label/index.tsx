import { DeleteButton } from '@/components/TodoItem/Label/buttons/Delete';
import { Group } from '@mantine/core';
import { type ReactNode } from 'react';

interface Props {
  input: ReactNode;
}

export const Label = ({ input }: Props) => {
  return (
    <Group noWrap spacing="sm">
      {input}
      <DeleteButton />
    </Group>
  );
};

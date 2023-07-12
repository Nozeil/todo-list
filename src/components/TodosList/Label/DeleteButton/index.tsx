import { ActionIcon } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { type HTMLProps } from 'react';

export const DeleteButton = ({ onClick }: HTMLProps<HTMLButtonElement>) => {
  return (
    <ActionIcon onClick={onClick}>
      <IconTrash />
    </ActionIcon>
  );
};

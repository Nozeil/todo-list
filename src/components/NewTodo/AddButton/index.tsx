import { ActionIcon } from '@mantine/core';
import { IconSquareRoundedPlus } from '@tabler/icons-react';
import { HTMLProps } from 'react';

export const AddButton = ({ onClick }: HTMLProps<HTMLButtonElement>) => {
  return (
    <ActionIcon onClick={onClick}>
      <IconSquareRoundedPlus />
    </ActionIcon>
  );
};

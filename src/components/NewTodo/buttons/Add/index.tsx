import { ActionIcon } from '@mantine/core';
import { IconSquareRoundedPlus } from '@tabler/icons-react';

interface Props {
  onClick?: () => void;
}

export const AddButton = ({ onClick }: Props) => {
  return (
    <ActionIcon onClick={onClick}>
      <IconSquareRoundedPlus />
    </ActionIcon>
  );
};

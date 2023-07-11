import { ActionIcon } from '@mantine/core';
import { IconSquareRoundedPlus } from '@tabler/icons-react';
import { memo } from 'react';

interface Props {
  onClick?: () => void;
}

export const AddButton = memo(({ onClick }: Props) => {
  return (
    <ActionIcon onClick={onClick}>
      <IconSquareRoundedPlus />
    </ActionIcon>
  );
});

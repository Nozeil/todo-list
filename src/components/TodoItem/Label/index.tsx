import { Group } from '@mantine/core';
import { type PropsWithChildren } from 'react';

export const Label = ({ children }: PropsWithChildren) => {
  return (
    <Group noWrap spacing="sm">
      {children}
    </Group>
  );
};

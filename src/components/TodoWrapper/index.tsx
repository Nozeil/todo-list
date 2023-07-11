import { Paper } from '@mantine/core';
import { PropsWithChildren } from 'react';

export const TodoWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Paper shadow="md" my={10}>
      {children}
    </Paper>
  );
};

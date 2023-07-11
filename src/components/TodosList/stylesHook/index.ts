import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  root: {
    padding: 10,
    border: `1px solid ${theme.colors.gray[1]}`,
    borderRadius: theme.radius.sm,
    background: theme.colors.gray[0],
  },
  itemWrapper: { width: '100%' },
}));

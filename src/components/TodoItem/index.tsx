import { Checkbox } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Label } from './Label';
import { useStyles } from './stylesHook';

export const TodoItem = () => {
  const [isChecked, handlers] = useDisclosure(false);
  const { classes } = useStyles();
  const classNames = { labelWrapper: classes.labelWrapper, body: classes.body };

  const onChange = () => handlers.toggle();

  return (
    <Checkbox
      size="md"
      classNames={classNames}
      checked={isChecked}
      label={<Label isChecked={isChecked} />}
      onChange={onChange}
    />
  );
};

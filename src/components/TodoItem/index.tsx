import { Checkbox, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Label } from './Label';
import { useStyles } from './stylesHook';
import type { TodoItemInitialState } from '@/types';
import { useState, type ChangeEvent } from 'react';
import { EditButton } from './Label/buttons/Edit';

export const TodoItem = ({ initialValue, initialIsChecked }: TodoItemInitialState) => {
  const [isChecked, handlers] = useDisclosure(initialIsChecked);
  const { classes } = useStyles();
  const classNames = { labelWrapper: classes.labelWrapper, body: classes.body };

  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const td = isChecked ? 'line-through' : 'none';

  return (
    <Checkbox
      size="md"
      classNames={classNames}
      checked={isChecked}
      label={
        <Label
          input={
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
          }
        />
      }
      onChange={handlers.toggle}
    />
  );
};

import { Checkbox, List, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Label } from './Label';
import { useStyles } from './stylesHook';
import type { TodoItemState } from '@/types';
import { useState, type ChangeEvent } from 'react';

export const TodoItem = ({ id, initialIsChecked, initialValue }: TodoItemState) => {
  const [isChecked, handlers] = useDisclosure(initialIsChecked);
  const { classes } = useStyles();
  const classNames = { root: classes.root, labelWrapper: classes.labelWrapper, body: classes.body };

  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const td = isChecked ? 'line-through' : 'none';

  return (
    <List.Item>
      <Checkbox
        w="100%"
        size="md"
        classNames={classNames}
        checked={isChecked}
        label={
          <Label
            input={
              <Textarea
                value={value}
                onChange={onChange}
                size="lg"
                autosize
                variant="filled"
                disabled={isChecked}
                td={td}
                sx={{ flexGrow: 1 }}
              />
            }
          />
        }
        onChange={handlers.toggle}
      />
    </List.Item>
  );
};

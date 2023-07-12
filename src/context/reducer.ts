import { ActionTypes } from '@/constants';
import { Action, TodosState } from '@/types';

export const todosReducer = (todos: TodosState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { id, initialValue } = action.payload;
      return [...todos, { id, initialValue, initialIsChecked: false }];
    }
    case ActionTypes.UPDATE: {
      return todos.map((item) => {
        const { id, initialValue, initialIsChecked } = action.payload;
        if (item.id === id) {
          const newItem = {
            id: item.id,
            initialValue: initialValue,
            initialIsChecked: initialIsChecked,
          };

          return newItem;
        }
        return item;
      });
    }
    case ActionTypes.DELETE: {
      return todos;
    }
    default: {
      throw Error('Unknown type');
    }
  }
};

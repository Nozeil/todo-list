import type { TodosState, TodoItemState } from '@/types';

export const updateToDoReducer = (todos: TodosState, payload: TodoItemState) => {
  return todos.map((item) => {
    const { id, initialValue, initialIsChecked } = payload;
    if (item.id === id) {
      const newItem = {
        id,
        initialValue,
        initialIsChecked,
      };

      return newItem;
    }
    return item;
  });
};

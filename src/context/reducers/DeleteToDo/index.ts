import type { TodosState } from '@/types';

export const deleteToDoReducer = (todos: TodosState, payload: string) => {
  return todos.filter((item) => item.id !== payload);
};

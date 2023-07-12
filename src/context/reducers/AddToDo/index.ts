import type { AddToDoPayload, TodosState } from '@/types';

export const AddToDoReducer = (todos: TodosState, payload: AddToDoPayload) => {
  const { id, initialValue } = payload;
  return [...todos, { id, initialValue, initialIsChecked: false }];
};

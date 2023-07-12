import { TodosContext, TodosDispatchContext } from '@/context';
import { todosReducer } from '@/context/reducers';
import { getTodos } from '@/services';
import type { Action, TodosState } from '@/types';
import { PropsWithChildren, Reducer, useReducer } from 'react';

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const [todos, dispatch] = useReducer<Reducer<TodosState, Action>>(todosReducer, getTodos());

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

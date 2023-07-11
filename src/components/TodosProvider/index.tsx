import { TodosContext } from '@/context';
import { getTodos } from '@/services';
import { PropsWithChildren } from 'react';

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const initialTodos = getTodos();

  return <TodosContext.Provider value={initialTodos}>{children}</TodosContext.Provider>;
};

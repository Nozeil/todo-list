import { TodosContext } from '@/context';
import { TodoItemsInitialStates } from '@/models';
import { getTodos } from '@/services';
import { PropsWithChildren, useEffect, useState } from 'react';

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const [initialTodos, setInitialTodos] = useState<TodoItemsInitialStates>([]);

  useEffect(() => {
    const todos = getTodos();
    setInitialTodos(todos);
  }, []);

  return (
    <TodosContext.Provider value={{ initialTodos, setInitialTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

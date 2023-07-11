import { type TodoItemsInitialStates } from '@/models';
import { Dispatch, SetStateAction, createContext } from 'react';

interface TodosContext {
  initialTodos: TodoItemsInitialStates;
  setInitialTodos: Dispatch<SetStateAction<TodoItemsInitialStates>>;
}

export const TodosContext = createContext<TodosContext>({
  initialTodos: [],
  setInitialTodos: () => {},
});

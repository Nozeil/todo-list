import { type TodoItemsInitialStates } from '@/models';
import { createContext } from 'react';

export const TodosContext = createContext<TodoItemsInitialStates>([]);

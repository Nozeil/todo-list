import { Dispatch, createContext } from 'react';
import type { Action, TodosState } from '@/types';

export const TodosContext = createContext<TodosState>([]);

export const TodosDispatchContext = createContext<Dispatch<Action>>(() => {});

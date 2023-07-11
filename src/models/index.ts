import type { TodoItemInitialState } from '@/types';

export type TodoItemsInitialStates = TodoItemInitialState[];

export type todosGetter = () => TodoItemsInitialStates;
export type todosSetter = (todos: TodoItemsInitialStates) => void;

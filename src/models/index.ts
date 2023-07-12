import type { TodosState } from '@/types';

export type todosGetter = () => TodosState;
export type todosSetter = (todos: TodosState) => void;

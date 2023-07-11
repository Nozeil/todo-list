import type { todosGetter, todosSetter } from '@/models';

const TODOS_KEY = 'todos';

export const getTodos: todosGetter = () => {
  const todos = localStorage.getItem(TODOS_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const setTodos: todosSetter = (todos) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

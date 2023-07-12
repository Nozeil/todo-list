import { ActionTypes } from '@/constants';
import { Action, TodosState } from '@/types';

export const todosReducer = (todos: TodosState, action: Action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionTypes.ADD: {
      console.log([...todos, action.payload]);
      return [...todos, action.payload];
    }
    case ActionTypes.UPDATE: {
      return todos;
    }
    case ActionTypes.DELETE: {
      return todos;
    }
    default: {
      throw Error('Unknown type');
    }
  }
};

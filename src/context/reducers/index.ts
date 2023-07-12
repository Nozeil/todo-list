import { ActionTypes } from '@/constants';
import { Action, TodosState } from '@/types';
import { AddToDoReducer } from './AddToDo';
import { deleteToDoReducer } from './DeleteToDo';
import { updateToDoReducer } from './UpdateToDo';

export const todosReducer = (todos: TodosState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      return AddToDoReducer(todos, action.payload);
    }
    case ActionTypes.UPDATE: {
      return updateToDoReducer(todos, action.payload);
    }
    case ActionTypes.DELETE: {
      return deleteToDoReducer(todos, action.payload);
    }
    default: {
      throw Error('Unknown type');
    }
  }
};

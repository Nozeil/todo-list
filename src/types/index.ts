import { ActionTypes } from '@/constants';

export interface TodoItemState {
  id: string;
  initialValue: string;
  initialIsChecked: boolean;
}

export type TodosState = TodoItemState[];

export type Action =
  | {
      type: ActionTypes.ADD;
      payload: TodoItemState;
    }
  | {
      type: ActionTypes.UPDATE;
      payload: TodoItemState;
    }
  | {
      type: ActionTypes.DELETE;
      payload: TodoItemState;
    };

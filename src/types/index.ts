import { ActionTypes } from '@/constants';

export interface TodoItemState {
  id: string;
  initialValue: string;
  initialIsChecked: boolean;
}

export type TodosState = TodoItemState[];
export type AddToDoPayload = Omit<TodoItemState, 'initialIsChecked'>;

export type Action =
  | {
      type: ActionTypes.ADD;
      payload: AddToDoPayload;
    }
  | {
      type: ActionTypes.UPDATE;
      payload: TodoItemState;
    }
  | {
      type: ActionTypes.DELETE;
      payload: string;
    };

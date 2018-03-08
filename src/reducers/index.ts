import { combineReducers } from 'redux';
import { Dispatch, ActionCreator } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import {
  IncrementAction,
  DecrementAction,
  INCREMENT,
  DECREMENT,
} from '../actions';

export type CounterState = number;

export const initialState: CounterState = 0;

const count = (
  state = initialState,
  action: IncrementAction | DecrementAction,
) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export type RootState = { count: CounterState };
const rootReducer = combineReducers<RootState>({ count });
export default rootReducer;

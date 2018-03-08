import { ActionCreator } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export const INCREMENT = 'INCREMENT';
export type IncrementAction = {
  type: typeof INCREMENT;
};
export const increment: ActionCreator<IncrementAction> = () => ({
  type: INCREMENT,
});
export const DECREMENT = 'DECREMENT';
export type DecrementAction = {
  type: typeof DECREMENT;
};
export const decrement: ActionCreator<DecrementAction> = () => ({
  type: DECREMENT,
});
export const incrementAsync: ActionCreator<
  ThunkAction<Promise<number>, RootState, void>
> = () => async dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
  return 1;
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from '../../store';
import { Counter } from './types';

const initialState: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state, action: PayloadAction) {
      state.count += 1;
    },
    decrease(state, action: PayloadAction) {
      state.count -= 1;
    },
    add(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export const add =
  (num: number): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(counterSlice.actions.add(num));
  };

export default counterSlice.reducer;

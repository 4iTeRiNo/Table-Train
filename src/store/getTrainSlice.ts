import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataTrains } from '../types';
import { fetchTrain } from './thunks';
import { isError } from '../utils/isError';

export type trainState = {
  list: dataTrains[];
  status: string;
  error: string | null;
};

const initialState: trainState = {
  list: [],
  status: 'idle',
  error: null,
};

const getTrainSlice = createSlice({
  name: 'trainSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrain.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTrain.fulfilled, (state, action) => {
        state.list = [action.payload];
        state.status = 'succeeded';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export default getTrainSlice.reducer;

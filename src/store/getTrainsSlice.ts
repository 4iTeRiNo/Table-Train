import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainData, TrainsData } from '../types';
import { fetchTrain } from './thunks';
import { isError } from '../utils/isError';
// import {

// } from '../utils/getValidateValue';
import { getTrainByIndex, validateValue } from './action';
import { validate } from '../utils/getValidateValue';
// import { validate } from '../utils/getValidateValue';

export type trainState = {
  list: TrainsData;
  status: string;
  error: string | null;
  disabled: boolean;
  isValidate: boolean;
  index: number;
  train: TrainData | undefined;
};

const initialState: trainState = {
  list: [],
  index: 0,
  status: 'idle',
  disabled: false,
  isValidate: true,
  error: null,
  train: undefined,
};

const getTrainsSlice = createSlice({
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
        state.list = action.payload.map((item, index) => {
          return {
            id: index,
            name: item.name,
            description: item.description,
            characteristics: item.characteristics,
          };
        });
      })
      .addCase(validateValue, (state, action) => {
        const { key, index, value } = action.payload;
        const isNum = Number(value);
        console.log(isNum, validate(key, isNum));

        if (validate(key, isNum)) {
          state.train = {
            id: index,
            name: state.train?.name,
            description: state.train?.description,
            characteristics: state.train?.characteristics?.map(
              (item, currentIndex) => {
                if (currentIndex === index) {
                  return {
                    ...item,
                    [key]: +value,
                  };
                } else {
                  return item;
                }
              },
            ),
          };
          state.isValidate = true;
        } else {
          state.disabled = true;
          state.isValidate = false;
        }
      })
      .addCase(getTrainByIndex, (state, action) => {
        const train = state.list.find(
          (_, index) => index === action.payload.index,
        );
        if (train) {
          state.train = train;
        }
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export default getTrainsSlice.reducer;

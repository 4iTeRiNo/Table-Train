import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainData, TrainsData } from '../types';
import { fetchTrain } from './thunks';
import { isError } from '../utils/isError';
import {
  isFloatingPointNumber,
  isNumber,
  isPositiveNumber,
} from '../utils/getValidateValue';
import { getTrainByIndex, validateValue } from './action';

type trainState = {
  list: TrainsData;
  status: string;
  error: string | null;
  disabled: boolean;
  isValidate: boolean;
  value: number;
  train: TrainData | null;
};

const initialState: trainState = {
  list: [],
  value: 0,
  status: 'idle',
  disabled: false,
  isValidate: false,
  error: null,
  train: null,
};

const getTrainsSlice = createSlice({
  name: 'trainSlice',
  initialState,
  reducers: {
    isValidate: (state) => {
      state.train?.characteristics.map((value) => {
        if (
          isPositiveNumber(value.engineAmperage) &&
          isNumber(value.speed) &&
          isFloatingPointNumber(value.force)
        ) {
          state.isValidate = true;
          state.disabled = false;
        } else {
          state.isValidate = false;
          state.disabled = true;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrain.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTrain.fulfilled, (state, action) => {
        state.list = action.payload.map((item, index) => {
          return {
            // переделать на индекс
            id: index,
            name: item.name,
            description: item.description,
            characteristics: item.characteristics,
          };
        });
      })
      .addCase(validateValue, (state, action) => {
        const { key, index, value } = action.payload;
        return {
          ...state,
          characteristics: state.train?.characteristics.map(
            (item, arrayIndex) => {
              if (arrayIndex === index) {
                return {
                  ...item,
                  [key]: +value,
                };
              } else {
                return state;
              }
            },
          ),
        };
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

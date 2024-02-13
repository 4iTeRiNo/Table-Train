import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainData, TrainsData } from '../types';
import { fetchTrain } from './thunks';
import { isError } from '../utils/isError';
import {
  getTrainByIndex,
  loaderSaveFalse,
  loaderSaveTrue,
  validateValue,
} from './action';
import { ErrorData } from '../types/errorData';
import { validate } from '../utils/getValidateValue';

export type trainState = {
  list: TrainsData;
  status: string;
  isLoading: boolean;
  error: string | null;
  isValidate: boolean;
  index: number;
  train: TrainData | undefined;
  errorData: ErrorData;
};

const initialState: trainState = {
  list: [],
  isLoading: false,
  index: 0,
  status: 'idle',
  isValidate: true,
  error: null,
  train: undefined,
  errorData: [],
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
      .addCase(loaderSaveTrue, (state) => {
        state.isLoading = true;
      })
      .addCase(loaderSaveFalse, (state) => {
        state.isLoading = false;
      })
      .addCase(validateValue, (state, action) => {
        const { key, index, value, errorWrite } = action.payload;
        if (validate(key, value)) {
          (state.train = {
            id: index,
            name: state.train?.name,
            description: state.train?.description,
            characteristics: state.train?.characteristics?.map(
              (item, currentIndex) => {
                if (currentIndex === index) {
                  return {
                    ...item,
                    [key]: value,
                  };
                } else {
                  return item;
                }
              },
            ),
          }),
            (state.isValidate = true);
          state.errorData.pop();
        } else {
          state.errorData.push(errorWrite);
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

import { createAction } from '@reduxjs/toolkit';
import { Characteristic } from '../types';
import { ErrorType } from '../types/errorData';

export const getTrainByIndex = createAction<{
  index: number;
}>('trainSlice/getTrainByIndex');

export const showTrainCharacteristics = createAction(
  'trainSlice/showTrainCharacteristics',
);

export const validateValue = createAction<{
  index: number;
  value: number;
  errorWrite: ErrorType | null;
  key: Characteristic;
}>('trainSlice/validateValue');

export const loaderSaveTrue = createAction('trainSlice/loaderSaveTrue');
export const loaderSaveFalse = createAction('trainSlice/loaderSaveFalse');

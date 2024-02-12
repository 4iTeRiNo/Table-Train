import { createAction } from '@reduxjs/toolkit';
import { Characteristic } from '../types';

export const isValidate = createAction('trainSlice/isValidate');
export const getTrainByIndex = createAction<{ index: number }>(
  'trainSlice/getTrainByIndex',
);

export const validateValue = createAction<{
  index: number;
  value: string;
  key: Characteristic;
}>('trainSlice/validateValue');

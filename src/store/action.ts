import { createAction } from '@reduxjs/toolkit';
import { Characteristic, TrainData } from '../types';

export const Validate = createAction<{
  index: number;
  value: string;
  key: Characteristic;
}>('trainSlice/isValidate');

export const getTrainByIndex = createAction<{
  index: number;
}>('trainSlice/getTrainByIndex');

export const showTrainCharacteristics = createAction(
  'trainSlice/showTrainCharacteristics',
);

export const validateValue = createAction<{
  index: number;
  value: string;
  key: Characteristic;
}>('trainSlice/validateValue');

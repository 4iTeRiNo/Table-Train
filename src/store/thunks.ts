import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrainsData } from '../types';
import { apiUrl } from '../constants';

export const fetchTrain = createAsyncThunk<
  TrainsData,
  undefined,
  { rejectValue: string }
>('fetchTrains', async function (_, { rejectWithValue }) {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    return rejectWithValue('Server Error');
  }

  const data = await response.json();
  return data;
});

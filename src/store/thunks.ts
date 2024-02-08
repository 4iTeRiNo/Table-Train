import { createAsyncThunk } from '@reduxjs/toolkit';
import { dataTrains } from '../types';
import { apiUrl } from '../constants';

export const fetchTrain = createAsyncThunk<
  dataTrains,
  undefined,
  { rejectValue: string }
>('fetchTrain', async function (_, { rejectWithValue }) {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    return rejectWithValue('Server Error');
  }

  const data = await response.json();
  console.log(data);

  return data;
});

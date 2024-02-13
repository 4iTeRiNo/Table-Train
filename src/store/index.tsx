import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { listenerMiddleware } from '../middelware/listenerMiddelware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { loaderSaveFalse, loaderSaveTrue } from '../store/action';
import { createListenerMiddleware, addListener } from '@reduxjs/toolkit';

import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store/index';

export const listenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

startAppListening({
  actionCreator: loaderSaveTrue,
  effect: (_, listenerApi) => {
    setTimeout(() => {
      listenerApi.dispatch(loaderSaveFalse());
    }, 4000);
  },
});

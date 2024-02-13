import { UnknownAction } from '@reduxjs/toolkit';

export function isError(action: UnknownAction) {
  return action.type.endsWith('rejected');
}

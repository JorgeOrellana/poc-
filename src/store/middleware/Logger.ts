import { Middleware } from "@reduxjs/toolkit";
import {RootState} from "../Store";

export const Logger: Middleware<{}, RootState> = store => next => action => {
  console.log('will dispatch', action.type);
  const returnValue = next(action);
  console.log('state after dispatch', store.getState());
  return returnValue;
}
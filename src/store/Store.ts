import { combineReducers } from "@reduxjs/toolkit";
import TodoReducer from '../slices/TodoSlice';
import { configureStore } from "@reduxjs/toolkit";
import {Logger} from "./middleware/Logger";
import { TodoApi } from "../api/todos-api";

const rootReducer = combineReducers({todo: TodoReducer, [TodoApi.reducerPath]: TodoApi.reducer} );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(TodoApi.middleware)
    .concat(Logger)
  ,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
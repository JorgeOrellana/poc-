import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import { TodoInitialState } from './InitialState';
import { TodoItemProps, TodoItemPropsResponse } from '../types/TodoItemType';
import { TodoApi } from '../api/todos-api';

export const PostTodoItem = createAsyncThunk(
  'Todos/PostTodoProcess',
  async (params: Partial<TodoItemProps>, thunkApi) => {
    const response = await thunkApi.dispatch(TodoApi.endpoints.postTodoItem.initiate(params));
    const todo = response as {data: TodoItemPropsResponse};
    const todoData = normalizeTodo([todo.data]);
    thunkApi.dispatch(TodoActions.addItem(todoData[0]));
  }
);

export const fetchTodo = createAsyncThunk(
  'Todos/FetchTodoProcess',
  async (params: string, thunkApi) => {
    const response = await thunkApi.dispatch(TodoApi.endpoints.getAllTodos.initiate(params));
    const todoData = normalizeTodo(response.data as TodoItemPropsResponse[]);
    thunkApi.dispatch(TodoActions.load(todoData));
    return response;
  }
);

export const removeTodoItem = createAsyncThunk(
  'Todos/RemoveTodoItemProcess',
  async (params: string, thunkApi) => {
    const response = await thunkApi.dispatch(TodoApi.endpoints.removeTodoItemById.initiate(params));
    if (response) {
      thunkApi.dispatch(TodoActions.remove(params));
    }
    //const todoData = normalizeTodo(response.data as TodoItemPropsResponse[]);
    //thunkApi.dispatch(TodoActions.load(todoData));
    return response;
  }
);

export const updateTodoItem = createAsyncThunk(
  'Todos/UpdateTodoItemProcess',
  async (params: Partial<TodoItemProps>, thunkApi) => {
    const dataParams = {...params, _id: params.id};
    debugger;
    await thunkApi.dispatch(TodoApi.endpoints.udpateItem.initiate(dataParams));
    /*
    if (response) {
      thunkApi.dispatch(TodoActions.update(params));
    }*/
  }
);


const normalizeTodo = (todoData: TodoItemPropsResponse[]) => 
  todoData.map((item) => ({...item, id: item._id}));

const TodoSlice = createSlice({
  name: "todo",
  initialState: TodoInitialState,
  reducers: {
    addItem: (state, action: PayloadAction<TodoItemProps>) => {
      state.data.push(action.payload);
    },
    load: (state, action) => {
      state.data = action.payload;
    },
    remove: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload);
    },
    update: (state, action) => {
      state.data.filter((item) => item.id == action.payload.id ? action.payload : item);
    },
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    }
  },
});

export default TodoSlice.reducer;

export const TodoActions = TodoSlice.actions;
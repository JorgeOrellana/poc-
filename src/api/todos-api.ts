import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { Api } from "./Api";
import { TodoItemProps, TodoItemPropsResponse } from "../types/TodoItemType";

export const TODO_PREFIX = "todos";

export const TodoApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    postTodoItem: builder.mutation<TodoItemPropsResponse, Partial<TodoItemProps>>({
      query: (body) => ({
        url: TODO_PREFIX,
        method: 'POST',
        body: body
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),
    getAllTodos: builder.query<TodoItemPropsResponse[], string>({
      query: (searchParam) => ({
        url: TODO_PREFIX,
        method: 'GET',
        params: {search: searchParam}
      }),
      providesTags: [{type: 'Todos', id: 'LIST'}]
    }),
    removeTodoItemById: builder.mutation<TodoItemPropsResponse, string>({
      query: (id) => ({
        url: TODO_PREFIX+`/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),
    udpateItem: builder.mutation<any, any>({
      query: (body) => ({
        url: TODO_PREFIX+'/6454f5f89189e06c85a7c2b7',
        method: 'PUT',
        body: {_id: "6454f5f89189e06c85a7c2b7", description: "Test 3"}
      }),
      invalidatesTags: [{type: 'Todos'}]
    })
  }),
  overrideExisting: true
});

export const {useGetAllTodosQuery, useUdpateItemMutation} = TodoApi;
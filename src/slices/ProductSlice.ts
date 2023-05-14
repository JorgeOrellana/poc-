import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductInitialState } from "./initial-state/ProductInitialState";

export const FetchProducts = createAsyncThunk(
  'Product/FetchProductProcess',
  async (params: string, thunkApi) => {
    const response = ProductInitialState.data;
    thunkApi.dispatch(ProductActions.load(response));
    return response;
  }
);

const ProductSlice = createSlice({
  name: 'Product',
  initialState: ProductInitialState,
  reducers: {
    load: (state, action) => {
      state.data = action.payload;
    }
  }
});

export default ProductSlice.reducer;

export const ProductActions = ProductSlice.actions;
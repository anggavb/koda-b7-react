import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getProductsThunk = createAsyncThunk(
  "product/get-products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  lastId: 0
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.lastId++
      state.products.unshift({...payload, id: state.lastId})
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    update: (state, { payload }) => {
      state.products = state.products.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
    },
    del: (state, { payload }) => {
      state.products = state.products.filter((item) => item.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getProductsThunk, {
      pending: (state) => {
        state.isLoading = true;
      },
      fulfilled: (state, { payload }) => {
        state.products = payload;
        state.lastId = payload.length;
        state.isLoading = false;
      },
      rejected: (state) => {
        state.isLoading = false;
      },
    });
  }
});

export const productActions = {
  ...productSlice.actions,
  getProductsThunk
};

export default productSlice.reducer;
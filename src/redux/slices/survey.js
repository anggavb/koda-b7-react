import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  survey: [],
  lastId: 0
};

const usersSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.lastId++
      state.survey.push({...payload, id: state.lastId})
    },
    del: (state, { payload }) => {
      state.survey = state.survey.filter((item) => item.id !== payload.id);
    },
  },
});

export const { add, del } = usersSlice.actions;

export default usersSlice.reducer;
// src/redux/modules/todosSlice.js

import { createSlice } from "@reduxjs/toolkit";

//초기값
const initialState = {
  todos: [],
};

//리듀스 슬라이스

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favDrawerVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.favDrawerVisible = !state.favDrawerVisible;
    },
  },
});

const uiReducer = uiSlice.reducer;

export const {toggle} = uiSlice.actions;

export default uiReducer;

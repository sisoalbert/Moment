import {configureStore} from '@reduxjs/toolkit';
import favSlice from './favSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    // products: productsReducer,
    fav: favSlice,
    ui: uiReducer,
  },
});

export default store;

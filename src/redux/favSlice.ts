import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {BookState, ItemType} from '../types/types';

type initialStateType = {
  bookList: ItemType[];
};

const bookList: ItemType[] = [];

const initialState: initialStateType = {
  bookList,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<ItemType>) => {
      console.log('====================================');
      console.log(action.payload);
      console.log('====================================');
      state.bookList.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<{id: number}>) => {
      console.log('====================================');
      console.log(action.payload);
      console.log('====================================');
      state.bookList = state.bookList.filter(
        book => book.id !== action.payload.id,
      );
    },
  },
});

export const {addNewBook, deleteBook} = bookSlice.actions;

export const selectBookList = (state: RootState) => state.book.bookList;

export default bookSlice.reducer;

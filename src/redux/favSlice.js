import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const favSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFav(state, {payload}) {
      console.log(state);
      const {uid} = payload;
      console.log(payload);
      const find = state.find(item => item.uid === uid);

      if (find) {
        return state.map(item =>
          item.uid === uid
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      //   console.log(state);
      //   console.log(state);
      //   console.log(action);
      const itemId = action.payload;
      return state.filter(item => item.uid !== itemId);
    },
    increament(state, {payload}) {
      console.log(state);
      console.log(payload);
      return state.map(item =>
        item.uid === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    },
    decrement(state, {payload}) {
      return state.map(item =>
        item.uid === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    },
    clear(state) {
      return [];
    },
  },
});

export const {addToFav, increament, decrement, clear, removeItem} =
  favSlice.actions;

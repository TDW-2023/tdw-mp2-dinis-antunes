import { createSlice } from '@reduxjs/toolkit';

// relativo a guardar o livro selecionado

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    selectedBook: null,
  },
  reducers: {
    selectBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { selectBook } = bookSlice.actions;
export const selectSelectedBook = (state) => state.book.selectedBook;

export default bookSlice.reducer;
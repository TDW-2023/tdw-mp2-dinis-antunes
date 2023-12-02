import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSliceRedux';

const StorageeToReadBooks = JSON.parse(localStorage.getItem('toReadBooks')) || []; //lista dos livros do localstorage, caso nao haja cria-se uma vazia

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
  preloadedState: { // estado do preload -> lista dos livro do ToRead obtida do localstorage
    book: {
      toReadBooks: StorageeToReadBooks,
    },
  },
});


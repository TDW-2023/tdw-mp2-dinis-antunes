import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSliceRedux';
import searchReducer from './slices/searchSliceRedux';

const StorageeToReadBooks = JSON.parse(localStorage.getItem('toReadBooks')) || []; //lista dos livros do localstorage, caso nao haja cria-se uma vazia
const StorageeHaveReadBooks = JSON.parse(localStorage.getItem('haveReadBooks')) || [];        

export const store = configureStore({
  reducer: {
    book: bookReducer,
    search: searchReducer,
  },
  preloadedState: { // estado do preload -> lista dos livro do ToRead obtida do localstorage
    book: {
      toReadBooks: StorageeToReadBooks,
      haveReadBooks: StorageeHaveReadBooks,
    },
  },
});


import { createSlice } from '@reduxjs/toolkit';



const bookSlice = createSlice({
  name: 'book',
  initialState: {
    selectedBook: null,
    toReadBooks: [],
    haveReadBooks: [],
  },
  reducers: {
    selectBook: (state, action) => {
      state.selectedBook = action.payload; // recebe os dados do livro selecionado para passa-lo para a master detail do livro
    },
    addToRead: (state, action) => { // reducer de add livros para o to read
      const novoBook = action.payload // obtem o novo livro
      state.toReadBooks.push(novoBook); // add o novo livro a lista
      localStorage.setItem('toReadBooks', JSON.stringify(state.toReadBooks)); //atualiza o localstorage com o livro novo
    },
    removeFromToRead: (state, action) => {
      const removeBooks = action.payload; // obtem o livro a ser removido
      state.toReadBooks = state.toReadBooks.filter((book) => book.id !== removeBooks.id); // filtra a lista e elimina o livro com o esse id
      localStorage.setItem('toReadBooks', JSON.stringify(state.toReadBooks)); //atualiza o localstorage removendo o livro
    },
    addToHaveRead: (state, action) => { // reducer de add livros para o to read
      const novoBookToHaveRead = action.payload // obtem o novo livro
      state.haveReadBooks.push(novoBookToHaveRead); // add o novo livro a lista
      localStorage.setItem('haveReadBooks', JSON.stringify(state.haveReadBooks)); //atualiza o localstorage com o livro novo
    },
    removeFromToHaveRead: (state, action) => {
      const removeBooksToHaveRead = action.payload; // obtem o livro a ser removido
      state.haveReadBooks = state.haveReadBooks.filter((book) => book.id !== removeBooksToHaveRead.id); // filtra a lista e elimina o livro com o esse id
      localStorage.setItem('haveReadBooks', JSON.stringify(state.haveReadBooks)); //atualiza o localstorage removendo o livro
    },
  },
});

export const { selectBook, addToRead,removeFromToRead, addToHaveRead, removeFromToHaveRead} = bookSlice.actions; // export das actions criadas pelos reducers
export const selectSelectedBook = (state) => state.book.selectedBook; // export de um selector -> recebe o estado do livro selecionado
export const selectToReadBooks = (state) => state.book.toReadBooks; // export de um selector -> recebe o estado do livro selecionado
export const selectToHaveReadBooks = (state) => state.book.haveReadBooks; // export de um selector -> recebe o estado do livro selecionado


export default bookSlice.reducer;
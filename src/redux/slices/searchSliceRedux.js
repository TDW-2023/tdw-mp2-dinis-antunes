import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//action assincrona da pesquisa por livros
export const searchBooks = createAsyncThunk('search/searchBooks', async (searchBook, { rejectWithValue }) => {
  try {
    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

        // Verificar se o input da pesquisa não está vazia antes de fazer o pedido para evitar a msg de bad request :(
        const query = encodeURIComponent(searchBook.trim());
        if (!query) {
          return [];
        }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=${apiKey}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl); //faz a chamada a api

    if (!response.ok) { //se o pedido der erro
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    return rejectWithValue(error.message); // Se houver um erro, rejeita a ação c/ msg error
  }
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(searchBooks.pending, (state, action) => {
      const query = action.meta.arg;
      if (!query) {
        // se input da pesquisa estiver vazio, ignorar a atualização do estado
        return;
      }

      state.status = 'loading'; //atualiza o estado da pesquisa para loading
    });

    builder.addCase(searchBooks.fulfilled, (state, action) => { // Atualiza o estado com os resultados da pesquisa c/ sucesso
      state.status = 'succeeded';
      state.searchResults = action.payload;
      state.error = null;
    });

    builder.addCase(searchBooks.rejected, (state, action) => { // Atualiza o estado com a mensagem de erro e indica o q falhou
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchError = (state) => state.search.error;

export default searchSlice.reducer;
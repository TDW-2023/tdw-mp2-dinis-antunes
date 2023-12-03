import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


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
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    return rejectWithValue(error.message);
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
        // Consulta vazia, ignorar a atualização do estado
        return;
      }

      state.status = 'loading';
    });

    builder.addCase(searchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.searchResults = action.payload;
      state.error = null;
    });

    builder.addCase(searchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchError = (state) => state.search.error;

export default searchSlice.reducer;
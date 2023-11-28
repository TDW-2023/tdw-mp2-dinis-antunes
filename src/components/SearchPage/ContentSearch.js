import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  background-color: #ececec;
  color: #2e2e2e;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 3em;
`;

const SearchBar = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid red;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 10px 0px 0px 10px;
  padding-left: 1em;
`;

const SearchButton = styled.button`
  margin-left: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0px 10px 10px 0px;
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BookItem = styled.li`
  margin-bottom: 16px;
  width: 200px;
  height: auto;
`;


const PaginationButtonsCointainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 8px;
`;

const ContentSearch = () => {
  const [searchBook, setSearchBook] = useState(""); // guardar o que foi pesquisado
  const [searchResults, setSearchResults] = useState([]); // guardar os resultados da pesquisa

  const [Page, setPage] = useState(1); // estado para paginas de resultados

  const booksPerPage = 4; // limitar o resultado da pesquisa a 4 livros p/ pagina

  const startIndex = (Page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedResults = searchResults.slice(startIndex, endIndex);

  // console.log(process.env)

  // const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  // console.log(apiKey);

  const handleSearchBook = () => {
    const apiKey = "AIzaSyDrTdQgZaVV2uA82GghoG_ib2KSabYp5M4";

    if (!apiKey) {
      console.error("Wrong API key...");
      return;
    }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.items || []);
        console.log("data API:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(`Searching for: ${searchBook}`);
  };

  const handleInputChange = (event) => {
    //atualizar o valor que está na search bar
    setSearchBook(event.target.value);
  };

  const handleKeyPress = (event) => {
    //realiza a pesquisa se se clicar no Enter

    if (event.key === "Enter") {
      handleSearchBook();
    }
  };

  const handlePageChange = (newPage) => {
    // mudar de paginas
    setPage(newPage);
  };

  return (
    <SearchContainer>
      <SearchBarContainer>
        <SearchBar
          type="text"
          placeholder="Search your next book..."
          value={searchBook}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <SearchButton onClick={handleSearchBook}>Search</SearchButton>
      </SearchBarContainer>
      {searchResults.length > 0 && (
        <div>
          <h2>Resultados da Pesquisa:</h2>
          <BookList>
            {displayedResults.map((result) => (
              <BookItem key={result.id}>
                <h3>{result.volumeInfo.title}</h3>
                {result.volumeInfo.authors && (
                  <p>Authors: {result.volumeInfo.authors.join(", ")}</p>
                )}
                {result.volumeInfo.imageLinks && (
                  <img
                    src={result.volumeInfo.imageLinks.thumbnail}
                    alt="Capa do Livro"
                  />
                )}
              </BookItem>
            ))}
          </BookList>
          <PaginationButtonsCointainer>
            <PaginationButton
              onClick={() => handlePageChange(Page - 1)}
              disabled={Page === 1}
            >
              Previous Page
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(Page + 1)}
              disabled={endIndex >= searchResults.length}
            >
              Next Page
            </PaginationButton>
          </PaginationButtonsCointainer>
        </div>
      )}
    </SearchContainer>
  );
};

export default ContentSearch;

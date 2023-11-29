import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import styled from "styled-components";
import DefaultImg from "../../assets/no_img_available.svg"
import ImgNoResult from "../../assets/no search.svg"
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
  max-width: 1200px;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BookItem = styled.li`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 16px;
width: 348px;

@media (max-width: 400px) {
  width: 300px;
}

@media (max-width: 330px) {
  width: 287px;
}


`;

const BookInfo = styled.div`
padding-left: 1em;
  text-align: left;
`;

const BookTitle = styled.h3`
font-size: 16px;
margin-bottom: 8px;
min-width: 150px
`;

const BookAuthors = styled.p`
font-size: 14px;
color: #888;
`;

const PaginationButtonsCointainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  margin-top: 2em;
  background: #c35252;
  border: 1px solid #c35252;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width:148px;

  @media (max-width: 400px) {
    width: 140px;
    font-size: 14px;
  }

  &:hover,
  &:active {
    background-color: initial;
    background-position: 0 0;
    color: #c35252;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    background: #ccc;
    border: 1px solid #ccc;
    color: #666;
    cursor: not-allowed;
  }
  
`;

const DefaultBookImage = styled.img`
  max-width: 200px;
  height: 180px;
`;

const TitleSerachResults = styled.h2`
margin-top: 2em;
margin-bottom: 2em;

@media (max-width: 400px) {
  font-size: 1.3em;
}

`;

const NoResultsForSearchContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

const ImageForNoResults = styled.img`
  max-width: 200px;
  height: auto;
`;

const MessageForNoResults = styled.h3`
margin-top: 2em;
margin-bottom: 2em;

@media (max-width: 400px) {
  font-size: 1.3em;
}
`;

const ContentSearch = () => {

  const [searchBook, setSearchBook] = useState(""); // guardar o que foi pesquisado
  const [searchResults, setSearchResults] = useState([]); // guardar os resultados da pesquisa

  const [Page, setPage] = useState(1); // estado para paginas de resultados

  const booksPerPage = 6; // limitar o resultado da pesquisa a 6 livros p/ pagina

  // paginacao dos resultados

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
    //para realizar a pesquisa se se clicar no Enter, e não só no clique no btn search

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

{/* resultados da pesquisa*/}

    {searchResults.length > 0 && (
      <div>
        <TitleSerachResults>Search Results:</TitleSerachResults>
        <BookList>
          {displayedResults.map((result) => (
            <BookItem key={result.id}>
              {result.volumeInfo.imageLinks ? (
              <img
                src={result.volumeInfo.imageLinks.thumbnail}
                alt="Capa do Livro"
              />):(
                <DefaultBookImage
                  src={DefaultImg}  // img default caso a api nao retorne img do livro
                  alt="imagem default capa de livro"
                />
              )}
              <BookInfo>
                <BookTitle>{result.volumeInfo.title}</BookTitle>
                {result.volumeInfo.authors && (
                  <BookAuthors>
                    {result.volumeInfo.authors.join(", ")}
                  </BookAuthors>
                )}
              </BookInfo>
            </BookItem>
          ))}
        </BookList>

        {/* btn's prev e next*/}

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

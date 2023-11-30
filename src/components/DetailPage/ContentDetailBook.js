import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedBook } from '../../redux/slices/bookSliceRedux';
import styled from 'styled-components';
import ArrowBack from '../../assets/back.png';
import { useNavigate } from 'react-router-dom';

const Spacetop = styled.div`
  padding-top: 3em;
`;

const ContentDetailBookContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 3em;
  min-height: 80vh;
  padding-left: 36px;
`;

const BackButton = styled.img`
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 4em;
  left: 36px;
`;

const BookImage = styled.img`
  max-width: 300px;
  height: 280px;
  margin-right: 20px;
  border-radius: 10px;
  z-index: 1; // Para colocar acima do BackButton
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px; // Ajuste conforme necessário
`;

const CategoriesContainer = styled.div`
  margin-top: 10px;
  background-color: #d64d4d;
  border-radius: 10px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  color: white;
`;

const ContentDetailBook = () => {

  const selectedBook = useSelector(selectSelectedBook);
  const navigate = useNavigate();

  if (!selectedBook) {
    return <Spacetop>No book selected yet</Spacetop>;
  }

  return (
    <ContentDetailBookContainer>
      <BackButton src={ArrowBack} onClick={() => navigate(-1)} />
      
      <BookImage src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />

      <BookDetails>
        <h2>{selectedBook.volumeInfo.title}</h2>
        <p>{selectedBook.volumeInfo.authors}</p>
        {selectedBook.volumeInfo.categories && (
          <CategoriesContainer>
            {selectedBook.volumeInfo.categories.map((category, index) => (
              <p key={index}>{category}</p>
            ))}
          </CategoriesContainer>
        )}
      </BookDetails>
    </ContentDetailBookContainer>
  );
};

export default ContentDetailBook;
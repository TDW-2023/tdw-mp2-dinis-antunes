import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedBook } from '../../redux/slices/bookSliceRedux';
import styled from 'styled-components';
import ArrowBack from '../../assets/back.png';
import { useNavigate } from 'react-router-dom';
import ImgNoResults from "../../assets/no search.svg"

const Spacetop = styled.div`
  padding-top: 5em;
  text-align: center;

  h3{
    margin-top:3em;
  }
`;

const ContentDetailBookContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 3em;
min-height: 80vh;
padding-left: 23px;
padding-right: 23px;

@media (min-width: 768px) {

padding-left: 36px;
padding-right: 36px;
  flex-direction: row;
  justify-content: center;
}
`;

const DetailContainer = styled.div `
display:flex;
flex-direction: column;
`;
const BackButton = styled.img`
width: 30px;
height: 20px;
cursor: pointer;
position: absolute;
margin-top:1em:
top: 5em;
left: 36px;

@media (min-width: 768px) {
  top: 7em;
}
`;

const BookImage = styled.img`
max-width: 300px;
height: 280px;
margin-bottom: 20px;
border-radius: 10px;
z-index: 1;

@media (max-width: 450px) {
  max-width: 250px;
  height: 220px;
}

`;

const BookDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;

@media (min-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 4em;
}
`;

const TitleBookss = styled.h2`
font-size: 1.5em;
padding-right: 0.6em;

@media (max-width: 450px) {
  font-size: 1.2em;
}

@media (max-width: 330px) {
  font-size: 1em;
}

`;

const CategoriesContainer = styled.div`
  margin-top: 10px;
  background-color: #d64d4d;
  border-radius: 10px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  color: white;

  @media (max-width: 768px) {
  display: flex;
  align-items: center;
  height: 40px;

  }

`;

const BookDescription = styled.h1`

font-size: 3vw;
font-weight: 600;
background-color: #d64d4d;
display: inline-block;
position: relative;
z-index: 1;
line-height: 0.08;
padding-right: 0.4em;
padding-bottom: 0.6em;

@media (max-width: 768px) {
  margin-top:2em;
  font-size: 6vw;
}
`
const DescriptionParagraph = styled.p`
max-height: 400px;
  overflow: auto;

@media (max-width: 768px) {
  margin-bottom:2em;
}

`

const BookDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 36px;
align-center;

@media (min-width: 768px) {
  max-width: 40%;
  margin-left: 20px;
}
`;
;

const ContentDetailBook = () => {

  const selectedBook = useSelector(selectSelectedBook);
  const navigate = useNavigate();

  if (!selectedBook) { // caso nenhum livro tiver sido selecionado
    return <Spacetop>
      <BackButton src={ArrowBack} onClick={() => navigate(-1)} />
      <h3>No book selected yet</h3>

      <img src={ImgNoResults}/>
      </Spacetop>;
  }

  const verifyIfBookHaveDescription = selectedBook.volumeInfo.description || "Sorry, this book doesn't have a description available :("

  return (
  <DetailContainer>
    <ContentDetailBookContainer>
      <BackButton src={ArrowBack} onClick={() => navigate(-1)} />
      
      <BookImage src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />

      <BookDetails>
        <TitleBookss>{selectedBook.volumeInfo.title}</TitleBookss>
        <p>{selectedBook.volumeInfo.authors}</p>
        {selectedBook.volumeInfo.categories && (
          <CategoriesContainer>
            {selectedBook.volumeInfo.categories.map((category, index) => (
              <p key={index}>{category}</p>
            ))}
          </CategoriesContainer>
        )}
      </BookDetails>
      <BookDescriptionContainer>
         <BookDescription>Description</BookDescription>
         <DescriptionParagraph>{verifyIfBookHaveDescription}</DescriptionParagraph>
         </BookDescriptionContainer>
    </ContentDetailBookContainer>



   </DetailContainer>
  );
};

export default ContentDetailBook;
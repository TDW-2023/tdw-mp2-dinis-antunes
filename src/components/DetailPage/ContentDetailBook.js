import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectSelectedBook } from '../../redux/slices/bookSliceRedux';
import { addToRead } from '../../redux/slices/bookSliceRedux';
import styled from 'styled-components';
import ArrowBack from '../../assets/back.png';
import { useNavigate } from 'react-router-dom';
import ImgNoResults from "../../assets/no search.svg"
import { Link } from 'react-router-dom';

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
border-radius: 10px;
z-index: 1;

@media (max-width: 450px) {
  max-width: 250px;
  height: 220px;
  margin-bottom: 20px;
  margin-top: 40px;
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
text-overflow: ellipsis;

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
  display: flex;
  align-items: center;
  height:50px;

  @media (max-width: 768px) {

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
`;

const DescriptionParagraph = styled.p`
max-height: 400px;
  overflow: auto;

@media (max-width: 768px) {
  margin-bottom:2em;
}

@media (max-width: 700px) {
  overflow: hidden;
}

`;

const BookDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-center;

@media (min-width: 768px) {
  max-width: 40%;
  margin-left: 20px;
}
`;

const BookButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;


  @media (max-width: 768px) {
margin-bottom:2em;
  }

`;

const AddBookToListButton1 = styled.button`
margin-right: 0.5em;
margin-top: 1em;
background: background-color: initial;;
border: 2px solid #c35252;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
box-sizing: border-box;
color: #c35252;
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

&:hover,
&:active {
  background-color: #c35252;
  background-position: 0 0;
  color: white;
}

&:active {
  opacity: 0.5;
}
`;

const AddBookToListButton2 = styled.button`
margin-left: 0.5em;
margin-top: 1em;
background: background-color: initial;;
border: 2px solid #c35252;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
box-sizing: border-box;
color: #c35252;
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

&:hover,
&:active {
  background-color: #c35252;
  background-position: 0 0;
  color: white;
}

&:active {
  opacity: 0.5;
}
`;

const ContentDetailBook = () => {

  const dispatch = useDispatch();
  const selectedBook = useSelector(selectSelectedBook);
  const navigate = useNavigate();

  if (!selectedBook) { // caso nenhum livro tiver sido selecionado
    return <Spacetop>
      <BackButton src={ArrowBack} onClick={() => navigate(-1)} />
      <h3>No book selected yet</h3>

      <img src={ImgNoResults} alt='no result img'/>
      </Spacetop>;
  }

  const handleAddToReadButton = () => { //adicionar livros para o To Read Page
    if (selectedBook) {
      console.log('A adicionar para o To read:', selectedBook)
      dispatch(addToRead(selectedBook));
    }
  };

  const verifyIfBookHaveDescription = selectedBook.volumeInfo.description || "Sorry, this book doesn't have a description available :(" //caso livro nao tiver descricao

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
          <BookButtonsContainer>
            <Link to="/to-read-page"><AddBookToListButton1 onClick={handleAddToReadButton}>To Read</AddBookToListButton1></Link>
            <AddBookToListButton2>Have Read</AddBookToListButton2>
          </BookButtonsContainer>

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
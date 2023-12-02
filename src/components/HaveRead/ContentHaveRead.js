import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToHaveReadBooks, removeFromToHaveRead} from '../../redux/slices/bookSliceRedux';
import styled from 'styled-components'
import DefaultImg from '../../assets/no_img_available.svg'

const TitleToRead = styled.h1`
margin-top:1.5em;
font-size: 3vw;
font-weight: 600;
background-color: #d64d4d;
display: inline-block;
position: relative;
z-index: 1;
line-height: 0.08;
padding-right: 0.4em;
padding-bottom: 0.6em;
margin-left: 36px;

@media (max-width: 768px) {
  margin-top:2em;
  font-size: 6vw;
}
`;

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  align-items: center;

  @media (max-width: 450px) {

      justify-content: space-evenly;
    }

`;

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 10px;
    flex-direction: column;
  }

  h2 {
    font-size: 1.2em;
    margin-left: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const BookTitle = styled.h3`
font-size: 16px;
margin-bottom: 8px;
max-width: 200px;
align-text: left;
`;

const ButtonDeleteBook =styled.button`
margin-right: 0.5em;
margin-top: 1em;
margin-bottom: 1em;
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


const ContentHaveRead = () => {

    const haveReadBooks = useSelector(selectToHaveReadBooks);
    console.log('Have Read Books:', haveReadBooks);

    const dispatch = useDispatch();

    const handleRemoveBookFromHaaveRead = (book) =>{
        dispatch(removeFromToHaveRead(book));
    }

  return (
    <div>
    <div>
      <TitleToRead>Have Read</TitleToRead>
      <BooksWrapper>
        {haveReadBooks.map((book) => (
          <BookContainer key={book.id}>
            {book.volumeInfo.imageLinks ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`Capa do livro ${book.volumeInfo.title}`}
              />
              ) : (
                <img
                  src={DefaultImg}
                  alt="imagem default da capa de livro"
                />
            )}
            <BookTitle>{book.volumeInfo.title}</BookTitle>
            <ButtonDeleteBook onClick={() => handleRemoveBookFromHaaveRead(book)}>Remove Book</ButtonDeleteBook>
          </BookContainer>
        ))}
      </BooksWrapper>
    </div>
    </div>
  )
}

export default ContentHaveRead
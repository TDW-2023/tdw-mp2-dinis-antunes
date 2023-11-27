import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import ImgHomepage from "../assets/img_hp_option_1.png"

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100vh;
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 40%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 1em;
`;

const ImageContainer = styled.div`
flex: 1;
max-width: 60%;
height: 100%;
margin-left: 20px;
text-align: left;
`;

const Image = styled.img`
width: 100%;
height: 100%;
max-width: 100%;
max-height: 100%;
object-fit: cover;
`;

const ContentHomepage = () => {
  return (
    // <ContentContainer>
    //     <TextContent>
    //     <div className="title-with-marker">
    

    // <Title id="contactos" className="big_title">Discover</Title>
    // </div>
    // <Paragraph>
    //       Dive into a vast collection of books, ranging from timeless classics to the latest releases.
    //       Now you can search, select, and add new books to your personal reading list.
    //       Organize, discover, and immerse yourself in new literary adventures.
    //     </Paragraph>
    //     <Link to="/search-page">
    //       <button>Search your next book</button>
    //     </Link>

    //     </TextContent>

    //     <ImageContainer>
    //     <Image src={ImgHomepage} alt="Image Homepage" />
    //   </ImageContainer>

    // </ContentContainer>
    <div className="motivation" style={{backgroundColor:'#ECECEC', color:'#2e2e2e'}}>
    <div className="text">

        <h1>Discover</h1>
        <p className='paragr_moti'>
        Dive into a vast collection of books, ranging from timeless classics to the latest releases.<br></br>
        Now you can search, select, and add new books to your personal reading list.<br></br>
        Organize, discover, and immerse yourself in new literary adventures.
        </p>
    </div>
    <div className='imageMotivation'>
        <img className='img_motiva' src={ImgHomepage} alt="imagem hero homepage" />
    </div>
</div>
  )
}

export default ContentHomepage
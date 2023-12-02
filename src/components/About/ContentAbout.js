import React from 'react'
import styled from 'styled-components';
// import ImgHomepage from "../../assets/img_hp_option_1.png"

const HeroAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  position: relative;
  min-height: calc(90vh - 70px);

  @media only screen and (max-width: 992px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 3em;
    padding-left: 3em;
    padding-right: 3em;
  }

  @media only screen and (max-width: 450px) {
    padding-top: 1.5em;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  margin-right: 20px;
  margin-left: 80px;
  position: relative;

  @media only screen and (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 50px;
    padding: 1em;
    margin-left: 0 !important;
  }

  @media (max-width: 700px) {
    .hero-title {
      font-size: 8vw !important;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 5vw;
  font-weight: 600;
  background-color: #d64d4d;
  display: inline-block;
  position: relative;
  z-index: 1;
  line-height: 0.08;
  padding-right: 0.4em;
  padding-bottom: 0.6em;

  @media (max-width: 700px) {
    font-size: 8vw !important;
  }
`;

const ParagrHomepage = styled.p`
  max-width: 60%;

  @media (max-width: 992px) {
    max-width: 90%;
  }

  @media (max-width: 700px) {
    max-width: 95%;
    margin-bottom: 2em;
  }
`;


const ImageHeroHomepage = styled.div`
  text-align: center;
  position: relative;
  
  img {
    max-width: 95%;
    height: auto;
  }
`;

const AboutText = styled.div`
  color: #d64d4d;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 10vw;
  z-index: 2; 

`;

const ContentAbout = () => {
  return (
    <div>
<HeroAboutContainer>
      <TextContainer>
        <HeroTitle>ReadQuest.</HeroTitle>
        <ParagrHomepage>
        The ReadQuest project was created within the scope of the Technologies and Web Development unit.
<br></br><br></br>
This project allows the user to immerse themselves in the universe of books, for this reason, ReadQuest uses the Google Books API as a data source, which allows us to offer our users the opportunity to explore and learn more about their favorite books.
<br></br>
This way, the user can discover new books and obtain some extra details about them. ReadQuest has the great advantage of allowing the user to save their list of readings they have already done and even create a list of their future readings, all without having to log in.
<br></br><br></br>
Embark on this emotional journey through the literary universe and create your virtual library with ReadQuest!
        </ParagrHomepage>
      </TextContainer>
      <ImageHeroHomepage>
        {/* <img src={ImgHomepage} alt="imagem hero homepage" /> */}
      </ImageHeroHomepage>
      <AboutText>
          <p>About</p>
        </AboutText>
    </HeroAboutContainer>
    </div>
  )
}

export default ContentAbout
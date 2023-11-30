import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import ImgHomepage from "../../assets/img_hp_option_1.png"

const HeroHomepageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  min-height: calc(90vh - 70px);
  
  @media only screen and (max-width: 992px) {
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
  max-width: 98% !important;

  @media (max-width: 700px) {
    max-width: 80%;
    margin-bottom: 2em;
  }
`;

const ButtonHomepage = styled.button`
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

  &:hover,
  &:active {
    background-color: initial;
    background-position: 0 0;
    color: #c35252;
  }

  &:active {
    opacity: 0.5;
  }
`;

const ImageHeroHomepage = styled.div`
  text-align: center;

  img {
    max-width: 95%;
    height: auto;
  }
`;

const ContentHomepage = () => {
  return (
    <HeroHomepageContainer>
      <TextContainer>
        <HeroTitle>Discover.</HeroTitle>
        <ParagrHomepage>
          Dive into a vast collection of books, ranging from timeless classics
          to the latest releases.
          <br />
          Now you can search, select, and add new books to your personal
          reading list.
          <br />
          Organize, discover, and immerse yourself in new literary adventures.
        </ParagrHomepage>
        <Link to="/search-page">
          <ButtonHomepage>Search your next book</ButtonHomepage>
        </Link>
      </TextContainer>
      <ImageHeroHomepage>
        <img src={ImgHomepage} alt="imagem hero homepage" />
      </ImageHeroHomepage>
    </HeroHomepageContainer>
  )
}

export default ContentHomepage
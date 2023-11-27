import React from 'react'
import Navbar from '../components/Navbar'
 import ContentHomepage from '../components/ContentHomepage';
 import styled from 'styled-components';

 const StyledHomepage = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const Homepage = () => {
  return (
    <StyledHomepage>
<Navbar/>
<ContentHomepage/>
   
    </StyledHomepage>
  )
}

export default Homepage
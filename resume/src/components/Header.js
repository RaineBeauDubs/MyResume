import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  margin: 4rem;
`;

const Name = styled.h1`
  font-size: 5rem;
  margin: 1rem;
  color: rgb(68, 0, 0);
`;

const Contact = styled.h2`
  font-size: 2rem;
`;

const Header = () => {
  return (
    <Heading>
      <Name>Raine Wallace</Name>
      <Contact>raine.wallace.dev@gmail.com</Contact>
      <Contact>RaineBeauDubs (GitHub)</Contact>
      <Contact>@RaineWallace1 (Twitter)</Contact>
      <Contact>raine-wallace (LinkedIn)</Contact>
    </Heading>
  )
}

export default Header;
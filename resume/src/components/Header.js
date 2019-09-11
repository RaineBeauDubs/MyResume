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

const Email = styled.h2`
  font-size: 2.5rem;
`;

const Header = () => {
  return (
    <Heading>
      <Name>Raine Wallace</Name>
      <Email>raine.wallace.dev@gmail.com</Email>
    </Heading>
  )
}

export default Header;
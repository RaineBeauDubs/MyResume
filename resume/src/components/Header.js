import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter, 
  faLinkedin, 
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faAt,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';

const Heading = styled.div`
  margin-right: 2rem;
  margin-bottom: 4rem
`;

const Name = styled.h1`
  font-size: 5rem;
  margin: 1rem;
  color: rgb(68, 0, 0);
`;

const Title = styled.h2`
  font-size: 3rem;
  margin: 1rem;
  margin-bottom: 3rem;
  color: grey
`;

const ContSec = styled.div`
  display: flex;
  margin-top: 1.5rem
`;

const Contact = styled.h2`
  font-size: 2rem;
`;

const Header = () => {
  return (
    <Heading>
      <Name>Raine Wallace</Name>
      <Title>Web Developer</Title>
      <ContSec>
        <FontAwesomeIcon className="icon" icon={faAt} />
        <Contact>RaineBeauDubs@gmail.com</Contact>
      </ContSec>
      <ContSec>
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <Contact>RaineBeauDubs</Contact>
      </ContSec>
      <ContSec>
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <Contact>RaineWallace1</Contact>
      </ContSec>
      <ContSec>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <Contact>Raine-Wallace</Contact>
      </ContSec>
      <ContSec>
        <FontAwesomeIcon className="icon" icon={faMobileAlt} />
        <Contact>(502) 758-5650</Contact>
      </ContSec>
    </Heading>
  )
}

export default Header;
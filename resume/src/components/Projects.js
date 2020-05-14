import React from 'react';
import styled from 'styled-components';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
  ListItems
} from '../reusableStyles';

const ProSec = styled.div`
  margin: 1.5rem;
`;

const ProTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  color: grey;
`;

const ProInfo = styled.h3`
  font-weight: bold;
  color: grey;
`;

const ProList = styled.ul`
  list-style: square inside none;
  display: flex;
  flex-wrap: wrap;
  margin: .4rem 2rem;
`;


const Projects = () => {
  return (
    <ResSection>
      <ResSectionTop>Projects:</ResSectionTop>
      <ResSectionBottom>
        <ProSec>
          <ProTitle>Let’s Get Tacos! — time4tacos.com</ProTitle>
          <ProInfo>Firebase | HTML/CSS | React | SQL | PostgreSQL | Node.js | Espress</ProInfo>
          <ProList>
            <ListItems>Collaborated remotely with a team of 3 web developers over an 8-week sprint to build a fully functional web application that met the demands of a stakeholder</ListItems>
            <ListItems>Contributed heavily towards front-end, back-end, and design aspects of project</ListItems>
            <ListItems>Implemented Google Firebase into both the front- and back-end for seamless authentication, along with another developer</ListItems>
            <ListItems>Solely responsible for design on all logging/viewing/detail pages</ListItems>
          </ProList>
        </ProSec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Projects;
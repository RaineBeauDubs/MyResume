import React from 'react';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
  Sec,
  Title,
  Info,
  List,
  ListItems
} from '../reusableStyles';


const Projects = () => {
  return (
    <ResSection>
      <ResSectionTop>Projects:</ResSectionTop>
      <ResSectionBottom>
        <Sec>
          <Title>Let’s Get Tacos! — time4tacos.com</Title>
          <Info>Firebase | HTML/CSS | React | SQL | PostgreSQL | Node.js | Espress</Info>
          <List>
            <ListItems>Collaborated remotely with a team of 3 web developers over an 8-week sprint to build a fully functional web application that met the demands of a stakeholder</ListItems>
            <ListItems>Contributed heavily towards front-end, back-end, and design aspects of project</ListItems>
            <ListItems>Implemented Google Firebase into both the front- and back-end for seamless authentication, along with another developer</ListItems>
            <ListItems>Solely responsible for design on all logging/viewing/detail pages</ListItems>
          </List>
        </Sec>
        <Sec>
        <Title>Tacocat Escape — jolly-perlman-0b534b.netlify.app</Title>
          <Info>HTML/CSS | React | SQL | PostgreSQL | Python | Django</Info>
          <List>
            <ListItems>Collaborated remotely with a team of 4 web developers over a 4-day period to build a full-stack web application</ListItems>
            <ListItems>Contributed heavily towards front-end, back-end, and design aspects of project using React, Python/Django, and CSS</ListItems>
            <ListItems>Solely responsible for final design implementation</ListItems>
          </List>
        </Sec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Projects;
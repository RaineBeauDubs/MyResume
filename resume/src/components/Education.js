import React from 'react';
import styled from 'styled-components';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
  ListItems
} from '../reusableStyles';

const EduSec = styled.div`
  margin: 1.5rem;
`;

const EduTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  color: grey;
`;

const EduInfo = styled.h3`
  font-weight: bold;
  color: grey;
`;

const EduDates = styled.h2`
  color: grey;
`;
const EduList = styled.ul`
  list-style: square inside none;
  display: flex;
  flex-wrap: wrap;
  margin: .4rem 2rem;
`;


const Education = () => {
  return (
    <ResSection>
      <ResSectionTop>Education:</ResSectionTop>
      <ResSectionBottom>
      <EduSec>
          <EduTitle>Lambda School</EduTitle>
          <EduInfo>Full-Stack Web Student</EduInfo>
          <EduDates>10/2018 - Current</EduDates>
          <EduList>
            <ListItems>Lambda School is an intense full-time coding boot-camp with a full-stack web development curriculum that includes HTML/CSS, JavaScript, React, SQL, PostgreSQL, Express, Node, Python, Django, and more</ListItems>
            <ListItems>Spent an eight-week unit with a group of 3 to create the front-end and the back-end of a project that met the demands of a real external stakeholder</ListItems>
          </EduList>
        </EduSec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Education;
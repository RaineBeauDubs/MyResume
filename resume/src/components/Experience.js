import React from 'react';
import styled from 'styled-components';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
  List,
  ListItems
} from '../reusableStyles';

const ExpSec = styled.div`
  margin: 1.5rem;
`;

const ExpTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  color: grey;
`;

const ExpInfo = styled.h3`
  font-weight: bold;
  color: grey;
`;

const ExpDates = styled.h2`
  color: grey;
`;
const ExpList = styled.ul`
  list-style: square inside none;
  display: flex;
  flex-wrap: wrap;
  margin: .4rem 2rem;
`;


const Experience = () => {
  return (
    <ResSection>
      <ResSectionTop>Experience:</ResSectionTop>
      <ResSectionBottom>
     
        <ExpSec>
          <ExpTitle>Lambda School</ExpTitle>
          <ExpInfo>Computer Science Section Lead</ExpInfo>
          <ExpDates>02/2020 - Current</ExpDates>
          <ExpList>
            <ListItems>Manage Team Leads to ensure that all students are receiving daily code reviews and sprint reviews</ListItems>
            <ListItems>Communicating with Team Leads and instructors, hosting daily stand-up meetings</ListItems>
            <ListItems>Coordinating with Student Success about student and Team Lead progress</ListItems>
            <ListItems>Resolving student and Team Lead conflicts</ListItems>
          </ExpList>
        </ExpSec>
        <ExpSec>
          <ExpInfo>Computer Science Team Lead</ExpInfo>
          <ExpDates>10/2019 - 02/2020</ExpDates>
          <ExpList>
            <ListItems>Graded all work from and supported a group of students through a two-month Computer Science curriculum that included blockchain, graphing, Python, Django, and much more</ListItems>
            <ListItems>Acted as People Manager for the performance management, professional growth, and development of each team member</ListItems>
            <ListItems>Acted as Project Lead for multiple Build-Week projects</ListItems>
            <ListItems>Led/hosted daily stand-up meetings with students</ListItems>
          </ExpList>
        </ExpSec>
        <ExpSec>
          <ExpInfo>Full-Stack Web Team Lead</ExpInfo>
          <ExpDates>02/2019 - 05/2019</ExpDates>
          <ExpList>
            <ListItems>Graded all work from and supported multiple groups of students through a three-month Full-Stack Web Development curriculum that included HTML/CSS, JavaScript, React, SQL, PostgreSQL, Express, and Node</ListItems>
            <ListItems>Acted as People Manager for the performance management, professional growth, and development of each team member</ListItems>
            <ListItems>Acted as Project Lead for multiple Build-Week projects</ListItems>
            <ListItems>Led/hosted Q&A and After Hours sessions for students</ListItems>
            <ListItems>Led/hosted daily stand-up meetings with students</ListItems>
          </ExpList>
        </ExpSec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Experience;
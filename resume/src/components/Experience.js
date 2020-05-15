import React from 'react';
import styled from 'styled-components';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
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

const ExpAlign = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem
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
          <ExpAlign>
            <ExpInfo>Computer Science Section Lead</ExpInfo>
            <ExpDates>02/2020 - 05/2020</ExpDates>
          </ExpAlign>
          <ExpList>
            <ListItems>Managed 15 Team Leads to ensure that all students received daily code reviews and sprint reviews</ListItems>
            <ListItems>Communicated with Team Leads and instructors, hosted daily stand-up meetings</ListItems>
            <ListItems>Coordinated with Student Success about student and Team Lead progress</ListItems>
            <ListItems>Resolved student and Team Lead conflicts</ListItems>
          </ExpList>
        </ExpSec>
        <ExpSec>
          <ExpAlign>
            <ExpInfo>Computer Science Team Lead</ExpInfo>
            <ExpDates>10/2019 - 02/2020</ExpDates>
          </ExpAlign>
          <ExpList>
            <ListItems>Graded all work from and supported a group of 8-10 students through a 2-month Computer Science curriculum that included blockchain, graphing, Python, Django, and much more</ListItems>
            <ListItems>Acted as People Manager for the performance management, professional growth, and development of each team member</ListItems>
            <ListItems>Acted as Project Lead for multiple Build-Week projects</ListItems>
            <ListItems>Led/hosted daily stand-up meetings with students</ListItems>
          </ExpList>
        </ExpSec>
        <ExpSec>
          <ExpAlign>
            <ExpInfo>Full-Stack Web Team Lead</ExpInfo>
            <ExpDates>02/2019 - 05/2019</ExpDates>
          </ExpAlign>
          <ExpList>
            <ListItems>Graded all work from and supported multiple groups of 7-10 students through a 3-month Full-Stack Web Development curriculum that included HTML/CSS, JavaScript, React, SQL, PostgreSQL, Express, and Node</ListItems>
            <ListItems>Acted as People Manager for the performance management, professional growth, and development of each team member</ListItems>
            <ListItems>Acted as Project Lead for multiple Build-Week projects</ListItems>
            <ListItems>Led/hosted Q&A and After Hours sessions for students</ListItems>
            <ListItems>Led/hosted daily stand-up meetings with students</ListItems>
          </ExpList>
        </ExpSec>
        <ExpSec>
          <ExpTitle>Rainy Day Resale</ExpTitle>
          <ExpAlign>
            <ExpInfo>Manager | Co-Owner</ExpInfo>
            <ExpDates>01/2014 - 10/2018</ExpDates>
          </ExpAlign>
          <ExpList>
            <ListItems>Managed, operated, and co-owned a consignment shop with 6 employees and around 600 active consignors</ListItems>
            <ListItems>Priced, tagged, and arranged hundreds of articles of clothing and accessories a week</ListItems>
            <ListItems>Refined customer service skills daily by supporting customers and consignors, personal shopping, and resolving any conflicts that came up</ListItems>
            <ListItems>Awarded "Best Consignment" in the "Best of Oldham" competition for every year the competition has taken place (6 years and counting!)</ListItems>
          </ExpList>
        </ExpSec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Experience;
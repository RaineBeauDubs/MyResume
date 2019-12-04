import React from 'react';
import styled from 'styled-components';
import {
  ResSection,
  ResSectionLeft,
  ResSectionRight,
  List,
  ListItems
} from '../reusableStyles';

const ExpSec = styled.div`
  margin: 2rem;
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
`;


const Experience = () => {
  return (
    <ResSection>
      <ResSectionLeft>Experience:</ResSectionLeft>
      <ResSectionRight>
        <ExpSec>
          <ExpTitle>Lambda School</ExpTitle>
          <ExpInfo>Full-Stack Web Team Lead</ExpInfo>
          <ExpDates>02/2019 - 05/2019</ExpDates>
        </ExpSec>
        <ExpSec>
          <ExpTitle>Lambda School</ExpTitle>
          <ExpInfo>Computer Science Team Lead</ExpInfo>
          <ExpDates>10/2019 - Current</ExpDates>
        </ExpSec>
      </ResSectionRight>
    </ResSection> 
  )
}

export default Experience;
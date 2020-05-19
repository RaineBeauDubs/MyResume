import React from 'react';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
  Sec,
  Title,
  InfDtAlign,
  Info,
  Dates,
  List,
  ListItems
} from '../reusableStyles';


const Education = () => {
  return (
    <ResSection>
      <ResSectionTop>Education:</ResSectionTop>
      <ResSectionBottom>
        <Sec>
          <Title>Lambda School</Title>
          <InfDtAlign>
          <Info>Full-Stack Web Student</Info>
            <Dates>10/2018 - Current</Dates>
          </InfDtAlign>
          <List>
            <ListItems>Lambda School is an intense full-time coding boot-camp with a full-stack web development curriculum that includes HTML/CSS, JavaScript, React, SQL, PostgreSQL, Express, Node, Python, Django, and more</ListItems>
            <ListItems>Spent an eight-week unit with a group of 3 to create the front-end and the back-end of a project that met the demands of a real external stakeholder</ListItems>
          </List>
        </Sec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Education;
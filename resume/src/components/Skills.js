import React from 'react';
import {
  ResSection,
  ResSectionLeft,
  ResSectionRight,
  List,
  ListItems
} from '../reusableStyles';

const Skills = () => {
  return (
    <ResSection>
      <ResSectionLeft>Skills:</ResSectionLeft>
      <ResSectionRight>
        <List>
          <ListItems>Solid Leadership Skills</ListItems>
          <ListItems>Exceptional Telephone/E-Mail Etiquette</ListItems>
          <ListItems>Exceptional Customer Service</ListItems>
        </List>
      </ResSectionRight>
    </ResSection>
  )
}

export default Skills;
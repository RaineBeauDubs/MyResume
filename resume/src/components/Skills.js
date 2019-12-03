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
          <ListItems>Solid leadership skills</ListItems>
          <ListItems>Exceptional people/customer-service skills</ListItems>
          <ListItems>Strong communication skills</ListItems>

          <ListItems>Committed and reliable team player</ListItems>
          <ListItems>Able to take direction, as well as contribute</ListItems>
          <ListItems>Able to learn quickly and efficiently</ListItems>
        </List>
      </ResSectionRight>
    </ResSection>
  )
}

export default Skills;
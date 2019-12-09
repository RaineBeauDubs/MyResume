import React from 'react';
import {
  ResSection,
  ResSectionTop,
  ResSectionBottom,
  List,
  ListItems
} from '../reusableStyles';

const Skills = () => {
  return (
    <ResSection>
      <ResSectionTop>Skills:</ResSectionTop>
      <ResSectionBottom>
        <List>
          <ListItems>Solid leadership skills</ListItems>
          <ListItems>Exceptional people/customer-service skills</ListItems>
          <ListItems>Strong communication skills</ListItems>

          <ListItems>Committed and reliable team player</ListItems>
          <ListItems>Able to take direction, as well as contribute</ListItems>
          <ListItems>Able to learn quickly and efficiently</ListItems>
        </List>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Skills;
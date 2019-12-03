import React from 'react';
import {
  ResSection,
  ResSectionLeft,
  ResSectionRight,
  List,
  ListItems

} from '../reusableStyles';

const Experience = () => {
  return (
    <ResSection>
      <ResSectionLeft>Experience:</ResSectionLeft>
      <ResSectionRight>
        <List>
          <ListItems>Lambda: TL 02/2019 - 05/2019</ListItems>
          <ListItems>Lambda: TL 10/2019 - Current</ListItems>
        </List>
      </ResSectionRight>
    </ResSection>
  )
}

export default Experience;
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


const Experience = () => {
  return (
    <ResSection>
      <ResSectionTop>Experience:</ResSectionTop>
      <ResSectionBottom>

        <Sec>
          <Title>Lambda School</Title>
          <InfDtAlign>
            <Info>Computer Science Section Lead | Remote</Info>
            <Dates>02/2020 - 05/2020</Dates>
          </InfDtAlign>
          <List>
            <ListItems>Managed 15 Team Leads to ensure that all 140+ students received daily code reviews and weekly sprint reviews</ListItems>
            <ListItems>Communicated with Team Leads and instructors, hosted daily stand-up meetings</ListItems>
            <ListItems>Coordinated with Student Success about student and Team Lead progress</ListItems>
            <ListItems>Resolved student and Team Lead conflicts</ListItems>
          </List>
        </Sec>
        <Sec>
          <InfDtAlign>
            <Info>Computer Science Team Lead | Remote</Info>
            <Dates>10/2019 - 02/2020</Dates>
          </InfDtAlign>
          <List>
            <ListItems>Graded all work from and supported a group of 8-10 students through a 2-month Computer Science curriculum that included blockchain, graphing, Python, Django, and much more</ListItems>
            <ListItems>Acted as People Manager for the performance management, professional growth, and development of each team member</ListItems>
            <ListItems>Assumed the role of Project Lead for multiple Build-Week projects</ListItems>
            <ListItems>Directed daily stand-up meetings with students</ListItems>
          </List>
        </Sec>
        <Sec>
          <InfDtAlign>
            <Info>Full-Stack Web Team Lead | Remote</Info>
            <Dates>02/2019 - 05/2019</Dates>
          </InfDtAlign>
          <List>
            <ListItems>Graded all work from and supported multiple groups of 7-10 students through a 3-month Full-Stack Web Development curriculum that included HTML/CSS, JavaScript, React, SQL, PostgreSQL, Express, and Node</ListItems>
            <ListItems>Acted as People Manager for the performance management, professional growth, and development of each team member</ListItems>
            <ListItems>Assumed the role of Project Lead for multiple Build-Week projects</ListItems>
            <ListItems>Conducted Q&A and After Hours sessions for students</ListItems>
            <ListItems>Directed daily stand-up meetings with students</ListItems>
          </List>
        </Sec>
        <Sec>
          <Title>Rainy Day Resale</Title>
          <InfDtAlign>
            <Info>Manager, Co-Owner | La Grange, KY</Info>
            <Dates>01/2014 - 10/2018</Dates>
          </InfDtAlign>
          <List>
            <ListItems>Managed, operated, and co-owned a consignment shop with 6 employees and around 600 active consignors</ListItems>
            <ListItems>Priced, tagged, and arranged hundreds of articles of clothing and accessories a week</ListItems>
            <ListItems>Refined customer service skills daily by supporting customers and consignors, personal shopping, and resolving any conflicts that came up</ListItems>
            <ListItems>Contributed to being awarded "Best Consignment" in the "Best of Oldham" competition for every year the competition has taken place (6 years and counting!)</ListItems>
          </List>
        </Sec>
      </ResSectionBottom>
    </ResSection>
  )
}

export default Experience;
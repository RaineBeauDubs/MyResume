import React from 'react';
import styled from 'styled-components';

const SkillsTitle = styled.h2`
  text-aSlign: left;
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem
  color: rgb(68, 0, 0);
`;


const Skill = styled.h2`
  font-size: 2rem;
  margin: 2rem 1rem
`;

const SkillsAlt = () => {
  return (
    <div>
      <SkillsTitle>Skills:</SkillsTitle>
      <ul>
        <Skill>Communication</Skill>
        <Skill>Customer Service</Skill>
        <Skill>Remote Management</Skill>
        <Skill>Public Speaking</Skill>
        <Skill>Student Support</Skill>
        <Skill>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>JavaScript ES6</Skill>
        <Skill>React</Skill>
        <Skill>Node.js</Skill>
        <Skill>Express</Skill>
        <Skill>SQL</Skill>
        <Skill>PostgreSQL</Skill>
        <Skill>Python</Skill>
      </ul>
        
    </div>
  )
}

export default SkillsAlt;
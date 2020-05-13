import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

const SkillsTitle = styled.h2`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem
  color: rgb(68, 0, 0);
`;

const SkillSec = styled.div`
  display: flex;
  margin-top: 1.5rem
`;

const Skill = styled.h2`
  font-size: 2rem;
`;

const Skills = () => {
  return (
    <div>
      <SkillsTitle>Skills:</SkillsTitle>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faHtml5} />
        <Skill>HTML5</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faCss3} />
        <Skill>CSS3</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faJs} />
        <Skill>JavaScript ES6</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faReact} />
        <Skill>React</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faNodeJs} />
        <Skill>Node.js</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faNodeJs} />
        <Skill>Express</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faDatabase} />
        <Skill>SQL</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faDatabase} />
        <Skill>PostgreSQL</Skill>
      </SkillSec>
      <SkillSec>
        <FontAwesomeIcon className="icon" icon={faPython} />
        <Skill>Python</Skill>
      </SkillSec>
    </div>
  )
}

export default Skills;
import React from 'react';
import { FrontEndSkills } from './SkillsData';
import './skills.scss';

const SkillBox = ({ name, icon }) => {
  return (
    <div className='skill-body'>
      <div className='icon-style'>
        {icon}
      </div>
      <span className='icon-name'>
        {name}
      </span>
    </div>
  );
};

const NewSkills = () => {
  return (
    <div className='skills-head'>
      <div className='skills-section'>
        <div className='skills-container'>
          {FrontEndSkills.map((skill, index) => (
            <SkillBox key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSkills;
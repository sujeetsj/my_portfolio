import React, { useState } from 'react';
import Showcase from './showcase';
import './style.scss';
import projectsData from './data';

const DynamicPortfolio = () => {
  const [projects] = useState(projectsData);
  const [transition] = useState(false);

  return (
    <div className='portfolio-content-wrapper'>
      <Showcase data={projects} transition={transition} />
    </div>
  );
};

export default DynamicPortfolio;
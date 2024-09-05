import React, { useState } from 'react';
import './style.scss';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

const Showcase = ({ data, transition }) => {
  const [showModal, setShowModal] = useState(false);
  const [currData, setCurrData] = useState(null);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <div className='projects-showcase'>
        {data.map((project) => (
          <div
            data-aos='fade-up'
            data-aos-duration='1200'
            data-aos-delay='300'
            className={`showcase-item ${transition === 'zoomout' ? 'zoomOut' : transition === 'zoomin' ? 'zoomIn' : ''}`}
            key={project.id}
          >
            <div className='meta-content'>
              <h6 className='card-name'>{project.name}</h6>
              <div className='go-to-cta'>
                <span
                  className='text'
                  onClick={() => {
                    setCurrData(project);
                    toggleModal();
                  }}
                >
                  <button className='button-89'>
                    <div>More Details</div>
                  </button>
                </span>
              </div>
            </div>
            <img src={project.img} alt={project.name} />
          </div>
        ))}
      </div>

      {showModal && currData && (
        <div style={{ overflow: 'scroll', transition: 'transform 0.3s ease' }}>
          <div className='modal-overlay'>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <button onClick={toggleModal} className='btn btn-close btn-danger'>&times; Close</button>
              <img className='project-image' src={currData.img} alt={currData.name} />
              <h3 className='modal-title'>{currData.name}</h3>
              <div className='tech'>
                Technology Used: {currData.tech.map((tec, index) => (
                  <span key={index}>
                    {React.cloneElement(tec.icon, { title: tec.name })}
                    {index < currData.tech.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <h6>Description:</h6>
              <p className='descz'>{currData.desc}</p>
              <h6>Features:</h6>
              <ul className='features'>
                {currData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className='project-links'>
                <a href={currData.gitLink} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                  <BsGithub /> &nbsp; Source Code
                </a>
                <a href={currData.live} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                  <FaLink /> &nbsp; Live URL
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Showcase;
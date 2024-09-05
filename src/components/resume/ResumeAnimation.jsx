import React from 'react';
import NewSkills from './Skills/NewSkills';

const resumeContent = [
  {
    jobPosition: `Software Developer`,
    jobType: `New Delhi`,
    jobDuration: `Nov 2023 - Present`,
    timeDuraton: `Full-Time`,
    compnayName: 'PyCray Technologies Private Limited',
    jobDescription: `Developing and implementing backend systems using Python and Django. Contributed to the development of the 'Moneyy.ai' financial platform. Designed and implemented APIs and utilized AWS services such as Lambda, S3, and EC2 for scalable deployment.`,
    delayAnimation: '',
  },
  {
    jobPosition: `Full Stack Developer Training`,
    jobType: `Gurgaon`,
    jobDuration: `Feb 2023 - Aug 2023`,
    timeDuraton: `Training`,
    compnayName: 'TCA Training and Development, Gurgaon',
    jobDescription: `Completed a comprehensive training program in Full Stack Development, covering front-end and back-end technologies including HTML, CSS, JavaScript, React, Python, Django, DRF , Docker and databases. Developed multiple projects to demonstrate understanding of full-stack development principles.`,
    delayAnimation: '100',
  },
];

const educatonContent = [
  {
    passingYear: 'Feb 2023 - Aug 2023',
    degreeTitle: 'Full Stack Developer Training',
    instituteName: 'TCA Training and Development, Gurgaon',
  },
  {
    passingYear: '2019-2022',
    degreeTitle: 'BCA in Computer Science & Engineering',
    instituteName: 'Microtek College of Management & Technology',
  },
  {
    passingYear: '2017-2018',
    degreeTitle: '12th in Science',
    instituteName: 'UP Board',
  },
  {
    passingYear: '2015-2016',
    degreeTitle: '10th',
    instituteName: 'CBSE Board',
  },
];

const Resume = () => {
  return (
    <>
      <section id='resume' className='section'>
        <div className='container'>
          <div className='title'>
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className='resume-box'>
            {resumeContent.map((val, i) => (
              <div
                className='resume-row'
                key={i}
                data-aos='fade-up'
                data-aos-duration='1200'
                data-aos-delay={val.delayAnimation}
              >
                <div className='row'>
                  <div className='col-md-4 col-xl-3'>
                    <div className='rb-left'>
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className='rb-time'>{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className='col-md-8 col-xl-9'>
                    <div className='rb-right'>
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className='separated'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className='title'>
            <h3>Education & Skills</h3>
          </div>

          <div className='row align-items-center'>
            <div
              className='col-lg-4 m-15px-tb'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <ul className='aducation-box'>
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{' '}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className='col-lg-7 ml-auto m-15px-tb'
              data-aos='fade-up'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              {/* <Skills /> */}
              <NewSkills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

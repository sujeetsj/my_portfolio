import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {
  const lottieUrl =
    'https://lottie.host/5123c39d-87df-40f7-8fcf-292fa96bacf2/rYVJgEzmCN.json';
  const SocialShare = [
    { Social: 'github.com/sujeetsj', link: 'https://github.com/sujeetsj' },
    {
      Social: 'linkedin.com/in/sjsujeetyadav/',
      link: 'https://www.linkedin.com/in/sjsujeetyadav/',
    },
  ];
  return (
    <>
      <section id='about' className='section theme-light dark-bg'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div
              className='col-md-6 col-lg-4'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <div className='about-me'>
                <div className='img'>
                  <lottie-player
                    src={lottieUrl}
                    background='transparent'
                    speed='1'
                    loop
                    autoplay
                  />
                </div>
              </div>
            </div>

            <div
              className='col-lg-7 ml-auto'
              data-aos='fade-up'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              <div className='about-info'>
                <div className='title'>
                  <h3>About Me</h3>
                </div>

                <div className='about-text'>
                  <p>
                    Welcome to my portfolio website! I am Sujeet Yadav, a dedicated Full Stack Developer with expertise in Python, Django, and AWS. I am passionate about creating scalable backend systems and engaging user experiences.
                  </p>
                  <p>
                    Through this platform, I aim to showcase my skills, projects, and my contributions to the tech community. I am actively seeking opportunities to grow as a developer and collaborate on innovative projects. Let's connect and explore exciting possibilities together!
                  </p>
                </div>
                <div className='info-list'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Sujeet Yadav</span>
                        </li>
                        <li>
                          <label>Phone: </label>
                          <span>+918354802222</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>sujeetyadav02222@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-sm-6'>
                      <ul>
                        <li>
                          <label>Location: </label>
                          <span>New Delhi</span>
                        </li>

                        <li>
                          <label>Github: </label>
                          <span>
                            <a
                              rel='noreferrer'
                              target='_blank'
                              href={SocialShare[0].link}
                            >
                              {SocialShare[0].Social}
                            </a>
                          </span>
                        </li>
                        <li>
                          <label>Linkedin: </label>
                          <span>
                            <a
                              rel='noreferrer'
                              target='_blank'
                              href={SocialShare[1].link}
                            >
                              {SocialShare[1].Social}
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='separated'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default About;

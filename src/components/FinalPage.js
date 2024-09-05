import React from 'react';
import Header from './header/HeaderTwo';
import Slider from './slider/SliderAnimation';
import About from './about/AboutAnimation';
import Resume from './resume/ResumeAnimation';

import Contact from './contact/Contact';
import ContactInfo from './contact/ContactInfo';

import Footer from './footer/FooterAnimation';
import DynamicPortfolio from './portfolio';
import NewSkills from './resume/Skills/NewSkills';

const FinalPage = () => {
  return (
    <div className='main-left theme-dark'>
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <section id='work' className='section theme-light dark-bg'>
        <div style={{ padding: '0' }} className='container'>
          <div className='title'>
            <h3>My Portfolio.</h3>
          </div>
          <DynamicPortfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      {/* End Portfolio Section */}

      <section id='contactus' className='section theme-light dark-bg'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-5 col-xl-4 m-15px-tb'
              data-aos='fade-right'
              data-aos-duration='1200'
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className='col-lg-7 ml-auto m-15px-tb'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              <div className='contact-form'>
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className='footer white'>
        <div className='container'>
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default FinalPage;

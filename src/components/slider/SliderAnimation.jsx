import React from 'react';
import TextLoop from 'react-text-loop';
import '@lottiefiles/lottie-player';

const conctInfo = {
  phone: '+91 8354802222',
  email: 'sujeetyadav02222@gmail.com',
};

const sliderContent = {
  name: 'Sujeet Yadav',
  designation: 'Full Stack Developer | Python Django Developer',
  description: `A diligent and proactive Full Stack Developer with expertise in Python, Django, and AWS, along with a strong foundation in data structures and algorithms. Experienced in developing scalable backend systems and user-friendly applications. Seeking challenging roles to contribute effectively to innovative development projects while continuously expanding my skill set in a dynamic professional environment.`
,  btnText: 'Download CV',
};

const Slider = () => {
  const lottieUrl =
    'https://lottie.host/b06d4261-5115-4fb3-b809-6655e7bc4872/QwBTwOn1WY.json';
  return (
    <>
      {/*  Home Banner */}
      <section id='home' className='home-banner'>
        <div className='hb-top-fixed d-flex'>
          <div className='hb-info'>
            <a href='tel:+91 8800237039'>{conctInfo.phone}</a>
            <a href='mailto:omkrjha@outlook.com'>
              {conctInfo.email}
            </a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className='container'>
          <div className='row full-screen align-items-center'>
            <div className='col-lg-7'>
              <div className='type-box'>
                <h6 data-aos='fade-up' data-aos-duration='1200'>
                  Hello, My name is
                </h6>
                <h1
                  className='font-alt'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='100'
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  <TextLoop>
                    <p className='loop-text lead'>
                      A Pragmatic Full Stack Developer
                    </p>
                    <p className='loop-text lead'>
                      I build things for the web
                    </p>
                  </TextLoop>
                </div>

                <p
                  className='desc'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='300'
                >
                  {sliderContent.description}
                </p>
                <div
                  className='mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='400'
                >
                  <a
                    className='px-btn px-btn-white'
                    href='https://drive.google.com/file/d/1d2G1bSdb-vrO5-dLl9-5xmZEkjzHgh5V/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hb-me'>
          <lottie-player
            src={lottieUrl}
            background='transparent'
            speed='1'
            loop
            autoplay
          />
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

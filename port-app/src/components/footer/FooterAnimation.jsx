import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialShare = [
  { Social: <FaGithub />, link: 'https://github.com/sujeetsj' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sjsujeetyadav/' },
];

const Footer = () => {
  return (
    <>
      <div className='row align-items-center'>
        <div className='col-md-6 my-2'>
          <div className='nav justify-content-center justify-content-md-start'>
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel='noreferrer' target='_blank'>
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className='col-md-6 my-2 text-center text-md-end'>
          <p>
            © {new Date().getFullYear()} Design and Developed by{'  '}
            <a
              href='https://www.linkedin.com/in/sjsujeetyadav/'
              target='_blank'
              rel='noreferrer'
            >
              sj-sujeet
            </a>{' '}
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;

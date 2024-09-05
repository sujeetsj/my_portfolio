import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
// import { Scrollspy } from '@makotot/ghostui';
import { scrollToSection } from '../helpers/helper';
import { Link } from 'react-router-dom';
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from 'react-icons/fi';
import { FaHome, FaBlog } from 'react-icons/fa';

const HeaderTwo = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className='mob-header'>
        <button className='toggler-menu' onClick={handleClick}>
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header
        className={
          click
            ? 'header-left header-menu-style-two menu-open'
            : 'header-left header-menu-style-two'
        }
      >
        <div className='scroll-bar'>
          <div className='hl-top'>
            <div className='hl-logo'>
              <Link to='/'>SJ</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            style={{ cursor: 'pointer' }}
            className='nav nav-menu'
            items={['home', 'about', 'resume', 'work', 'contactus']}
            currentClassName='active'
            offset={-30}
          >
            <li>
              <div
                className='nav-link '
                // href='#home'
                onClick={() => {
                  handleClick();
                  scrollToSection('home');
                }}
              >
                <FaHome />
                <span className='item'>Home</span>
              </div>
            </li>
            <li>
              <div
                className='nav-link'
                onClick={() => {
                  handleClick();
                  scrollToSection('about');
                }}
              >
                <FiUser />
                <span className='item'>About</span>
              </div>
            </li>
            <li>
              <div
                className='nav-link'
                onClick={() => {
                  handleClick();
                  scrollToSection('resume');
                }}
              >
                <FiFileText />
                <span className='item'>Resume</span>
              </div>
            </li>
            <li>
              <div
                className='nav-link'
                href='#work'
                onClick={() => {
                  handleClick();
                  scrollToSection('work');
                }}
              >
                <FiBriefcase />
                <span className='item'>Projects</span>
              </div>
            </li>
            <li>
              <div
                className='nav-link'
                href='#contactus'
                onClick={() => {
                  handleClick();
                  scrollToSection('contactus');
                }}
              >
                <FiPhoneOutgoing />
                <span className='item'>Contact</span>
              </div>
            </li>
            <li>
             
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderTwo;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Modali, { useModali } from 'modali';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

// import Button from './components/button.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Work from './pages/work.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Solutions from './pages/solutions.js';

import burgerIcon from './images/menuBurger.png';
import burgerIconClose from './images/closeMenuBurger.png';

function App() {
  const [contactModal, toggleContactModal] = useModali({
    title: 'You can contact me via ...',
  });
  const [changeStyle, setChangeStyle] = useState(false);
  const [page, setPage] = useState('about');
  const [windowScroll, setWindowScroll] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [curricula, setCurricula] = useState('experience');
  const [showBurger, setShowBurger] = useState(false);

  const changeHeaderOnWindowScroll = (e) => {
    if (window.scrollY > 10) {
      setWindowScroll(true);
      setShowDropdown(false);
    } else {
      setWindowScroll(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', (e) => changeHeaderOnWindowScroll(e), {passive: true});
    window.removeEventListener('scroll', (e) => changeHeaderOnWindowScroll(e));
  }, []);

  const handleClick = (e) => {
    if (e.target.id !== 'work') {
      setChangeStyle(true);
      setPage(e.target.id);
      setShowDropdown(true);
    } else {
      
      showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    }
  }

  const handleSubMenu = (e) => {
    showDropdown ? setShowDropdown(true) : setShowDropdown(false);    
  }

  const handleWorkType = (e) => {
    setShowDropdown(false);
    setCurricula(e.target.id);
    setPage('work');
  }

  const handleBurger = () => {
    showBurger ? setShowBurger(false) : setShowBurger(true);
  }

  return (
    <div className={"App" && css(style.body)}>
        <section className={css(style.headerMobile)}>
          <Header onClick={() => {setPage('about'); setShowBurger(false)}} onScrollLogo={css(style.onScrollLogo)} />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button className={css(style.burger)} onClick={() => {handleBurger(); setShowDropdown(false)}}>{!showBurger ? <img className={css(style.burgerIcon)} src={burgerIcon} alt="Menu mobile icon click to open" /> : <img className={css(style.burgerIconClose)} src={burgerIconClose} alt="Menu mobile icon click to close" />}</button>
            <ul className={!showBurger ? css(style.mobileMenu) : css(style.mobileMenuHide)}>
              <li>
                <a id='about' className={css(style.links)} onClick={(e) => {handleClick(e); setShowDropdown(false); setCurricula('experience'); handleBurger()}}>About</a>
              </li>
              <li>
                <a id='work' className={css(style.links)} onClick={(e) => {handleClick(e)}}>Work
                </a>
                <ul className={ showDropdown ? css(style.dropdownMenu) : css(style.hideDropdownMenu)}>
                  <li className={css(style.linksDropdown)} id="experience" onClick={(e) => {handleWorkType(e); handleBurger()}}>Experience</li>
                  <li className={css(style.linksDropdown)} id="academic" onClick={(e) => {handleWorkType(e); handleBurger()}}>Academic formation</li>
                  <li className={css(style.linksDropdown)} id="courses" onClick={(e) => {handleWorkType(e); handleBurger()}}>Courses</li>
                </ul>
              </li>
              <li>
                <a className={css(style.links)} onClick={(e) => {handleClick(e); setShowDropdown(false); setCurricula('experience'); handleBurger()}}>Solutions</a>
              </li>
              <li onClick={toggleContactModal}>
                <span className={css(style.links)} onClick={() => {setShowDropdown(false); handleBurger()}}>Contact</span>
              </li>
              <Modali.Modal {...contactModal}>
                <Contact />
              </Modali.Modal>
            </ul>
          </div>
          
        </section> 
        <section className={windowScroll ? css(style.newHeader) : css(style.header)}>
          <Header onClick={(e) => {setPage('about'); handleSubMenu(e)}} onScroll={ windowScroll ? css(style.onScroll) : css(style.headerDescription)} onScrollLogo={windowScroll ? css(style.onScrollLogo) : css(style.headerTitle)} />
          <ul className={css(style.menu)}>
            <li>
              <a id='about' className={css(style.links)} onClick={(e) => {handleClick(e); setShowDropdown(false); setCurricula('experience'); setShowBurger(false)}}>About</a>
            </li>
            <li>
              <a id='work' className={css(style.links)} onClick={(e) => {handleClick(e)}} onMouseOver={() => {showDropdown ? setShowDropdown(false) : setShowDropdown(true)}} onMouseOut={() => setShowDropdown(false)}>Work
              </a>              
              <ul onMouseOver={() => setShowDropdown(true)} onMouseOut={() => setShowDropdown(false)} className={ showDropdown ? css(style.dropdownMenu) : css(style.hideDropdownMenu)}>
                <li className={css(style.linksDropdown)} id="experience" onClick={(e) => handleWorkType(e)}>Experience</li>
                <li className={css(style.linksDropdown)} id="academic" onClick={(e) => {handleWorkType(e)}}>Academic formation</li>
                <li className={css(style.linksDropdown)} id="courses" onClick={(e) => {handleWorkType(e)}}>Courses</li>
              </ul>
            </li>
            <li>
              <a className={css(style.links)} onClick={(e) => {handleClick(e); setShowDropdown(false); setCurricula('experience'); setShowBurger(false)}}>Solutions</a>
            </li>
            <li onClick={toggleContactModal}>
              <span className={css(style.links)} onClick={() => {setShowDropdown(false); setShowBurger(false)}}>Contact</span>
            </li>
            <Modali.Modal {...contactModal}>
              <Contact />
            </Modali.Modal>
          </ul>
        </section>
      
        <section className={css(style.page)}>
          {
            page === 'about' ? <About /> : null
          }
          {
            page === 'work' ? <Work curricula={curricula}  /> : null
          }
          {
            page === 'solutions' ? <Solutions /> : null
          }
        </section>
        <Footer />
    </div>
  );
}

const style = StyleSheet.create ({
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '10px',
    paddingTop: '20px',
    width: '100%',
    position: 'fixed',
    marginTop: '-5px',
    zIndex: '1',
    backgroundColor: '#82C9D9',
    '-moz-transition'    : 'all 1s ease-out',
    '-o-transition'      : 'all 1s ease-out',
    '-webkit-transition' : 'all 1s ease-out',
    transition         : 'all 1s ease-out',
    '@media only screen and (max-width: 600px)': {
      display: 'none',
    }
  },
  newHeader: {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: 'none',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#82C9D9',
    position: 'fixed',
    zIndex: '1',
    '-moz-transition'    : 'all 1s ease-out',
    '-o-transition'      : 'all 1s ease-out',
    '-webkit-transition' : 'all 1s ease-out',
    transition         : 'all 1s ease-out',
    '@media only screen and (max-width: 600px)': {
      display: 'none',
    }
  },
  headerMobile: {
    display: 'none',
    '@media only screen and (max-width: 600px)': {
      display: 'flex',
      justifyContent: 'space-around',
      borderBottom: 'none',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#82C9D9',
      position: 'fixed',
      zIndex: '1',      
    }
  },
	headerTitle: {
		fontFamily: `'Questrial', sans-serif`,
		fontSize: '60px',
		fontWeight: 'light',
		color: '#82C9D9',
		backgroundColor: '#0D0D0D',
		padding: '10px',
		marginBottom: '8px',
		width: '96px',
		border: '1px solid black',
    marginTop: '0',
    ':hover': {
      backgroundColor: 'transparent',
      border: '1px solid #82C9D9',
      color: '#0D0D0D',
    }
  },
  onScrollLogo: {
    fontFamily: `'Questrial', sans-serif`,
		fontSize: '40px',
		fontWeight: 'light',
		color: '#82C9D9',
		backgroundColor: '#0D0D0D',
		padding: '10px',
		marginBottom: '0',
		width: '64px',
		border: '1px solid black',
    marginTop: '0',
    ':hover': {
      backgroundColor: 'transparent',
      border: '1px solid #82C9D9',
      color: '#0D0D0D',
    },
    '@media only screen and (max-width: 600px)': {
      ':hover': {
        color: '#82C9D9',
        backgroundColor: '#0D0D0D',
        border: '1px solid black',
      }
    }
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    '@media only screen and (max-width: 600px)': {
      display: 'none',
    }
  },
  mobileMenu: {
    display: 'none',
  },
  mobileMenuHide: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
  },
  burger: {
    display: 'none',
    '@media only screen and (max-width: 600px)': {
      display: 'flex',
      background: 'transparent',
      outline: 'none',
      border: 'none',
      fontSize: '40px',
      justifyContent: 'flex-end'
    },
  },
  burgerIcon: {
    width: '40px',
  },
  burgerIconClose: {
    padding: '20px 0 0',
    width: '30px',
  },
  links: {
    textDecoration: 'none',
    color: "#0D0D0D",
    textTransform: 'uppercase',
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: '700',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
    ':active': {
      color: '#311C40',
    },
    ':focus': {
      color: '#311C40',
    }
  },
  dropdownMenu: {
    position: 'absolute',
    display: 'block',
    zIndex: '1',
    margin: '0 auto',
    listStyle: 'none',
    padding: '20px',
    backgroundColor: 'rgba(13,13,13,.8)',
    borderRadius: '15px',
    color: '#82C9D9',
    textTransform: 'uppercase',
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: '700',
    lineHeight: '30px',
    fontSize: '14px',
    '@media only screen and (max-width: 600px)': {
      backgroundColor: '#181B1C',
    }
  },
  hideDropdownMenu: {
    display: 'none',
  },
  linksDropdown: {
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  whitespace: {
    position: 'fixed',
    width: '100%',
    zIndex: '0',
    height: '224px',
    backgroundColor: '#fff',
  },
  page: {
    width: '80%',
    margin: '0 auto',
    paddingTop: '160px',
    zIndex: '-1',
    backgroundColor: 'transparent',
    '@media only screen and (max-width: 600px)': {
      paddingTop: '80px',
    }
  },
});

export default App;

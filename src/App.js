/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Modali, { useModali } from 'modali';

import Header from './components/header.js';
import Footer from './components/footer.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Solutions from './pages/solutions.js';
import Home from './pages/home.js';
import Customers from './pages/customers.js';

import burgerIcon from './images/menuBurger.png';
import burgerIconClose from './images/closeMenuBurger.png';

function App() {
  const [contactModal, toggleContactModal] = useModali({
    title: 'You can contact me via ...',
  });
  const [page, setPage] = useState('home');
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
    showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    setPage(e.target.id);
  }

  const handleSubMenu = (e) => {
    showDropdown ? setShowDropdown(true) : setShowDropdown(false);    
  }

  const handleSolutionsType = (e) => {
    setShowDropdown(false);
    setCurricula(e.target.id);
    setPage('solutions');
  }

  const handleBurger = () => {
    showBurger ? setShowBurger(false) : setShowBurger(true);
  }

  return (
    <div className={"App" && css(style.body)}>
        <section className={css(style.headerMobile)}>
          <Header 
            onClick={() => {setPage('home'); setShowBurger(false); window.scrollTo(0, 0)}} 
            onScrollLogo={css(style.onScrollLogo)} 
          />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button 
              className={css(style.burger)} 
              onClick={() => {handleBurger(); setShowDropdown(false)}}>
              {
                !showBurger ? 
                <img 
                  className={css(style.burgerIcon)} 
                  src={burgerIcon} 
                  alt="Menu mobile icon click to open"
                /> : 
                <img 
                  className={css(style.burgerIconClose)}
                  src={burgerIconClose}
                  alt="Menu mobile icon click to close"
                />
              }
            </button>
            <ul className={!showBurger ? css(style.mobileMenu) : css(style.mobileMenuHide)}>
              <li style={{margin: '10px 0'}}>
                <a 
                  id='about' 
                  className={css(style.links)} 
                  onClick={(e) => {handleClick(e); setShowDropdown(false); setCurricula('experience'); handleBurger(); window.scroll(0,0)}}
                >
                  About me
                </a>
              </li>
              <li style={{marginBottom: '10px'}}>
                <a 
                  id='solutions'
                  className={css(style.links)}
                  onClick={(e) => {handleClick(e); setPage('solutions')}}
                >
                  Solutions
                </a>
                <ul className={ showDropdown ? css(style.dropdownMenu) : css(style.hideDropdownMenu)}>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={(e) => {handleSolutionsType(e); handleBurger(); window.scrollTo(0, 0)}}
                  >
                    Turbine Control Systems
                  </li>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={(e) => {handleSolutionsType(e); handleBurger(); document.getElementById('sol_2').scrollIntoView({ block: "start", behavior: 'smooth' })}}
                  >
                    Electrical Substation Automation
                  </li>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={(e) => {handleSolutionsType(e); handleBurger(); document.getElementById('sol_3').scrollIntoView({ block: "start", behavior: 'smooth' })}}
                  >
                    Oil&Gas Control Systems
                  </li>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={(e) => {handleSolutionsType(e); handleBurger(); document.getElementById('sol_4').scrollIntoView({ block: "start", behavior: 'smooth' })}}
                  >
                    Vibration Analysis
                  </li>
                </ul>
              </li>
              <li style={{marginBottom: '10px'}}>
                <a 
                  className={css(style.links)} 
                  onClick={(e) => {handleClick(e); setShowDropdown(false); setPage('customers'); handleBurger()}}
                >
                  Customers
                </a>
              </li>
              <li 
                onClick={toggleContactModal} 
                style={{marginBottom: '10px'}}
              >
                <span 
                  className={css(style.links)} 
                  onClick={() => {setShowDropdown(false); handleBurger()}}
                >
                  Contact
                </span>
              </li>
              <Modali.Modal {...contactModal}>
                <Contact />
              </Modali.Modal>
            </ul>
          </div>
        </section>
        <section className={windowScroll ? css(style.newHeader) : css(style.header)}>
          <Header 
            onClick={(e) => {setPage('home'); handleSubMenu(e); window.scrollTo(0, 0)}} 
            onScroll={ windowScroll ? css(style.onScroll) : css(style.headerDescription)} onScrollLogo={windowScroll ? css(style.onScrollLogo) : css(style.headerTitle)}
          />
          <ul className={css(style.menu)}>
            <li>
              <a 
                id='about' 
                className={css(style.links)} 
                onClick={(e) => {handleClick(e); setShowDropdown(false); setCurricula('experience'); setShowBurger(false); window.scroll(0, 0)}}
              >
                About me
              </a>
            </li>
            <li>
              <a 
                id='solutions' 
                className={css(style.links)} 
                onClick={(e) => {handleClick(e); setPage('solutions'); window.scrollTo(0,0)}} 
                onMouseOver={() => {showDropdown ? setShowDropdown(false) : setShowDropdown(true)}}
                onMouseOut={() => setShowDropdown(false)}
              >
                Solutions
              </a>              
              <ul 
                onMouseOver={() => setShowDropdown(true)} 
                onMouseOut={() => setShowDropdown(false)} 
                className={ showDropdown ? css(style.dropdownMenu) : css(style.hideDropdownMenu)}>
                <li 
                  className={css(style.linksDropdown)} 
                  id="" 
                  onClick={(e) => {handleSolutionsType(e); window.scroll(0,0)}}
                >
                  Turbine Control Systems
                </li>
                <li 
                  className={css(style.linksDropdown)} 
                  id="" 
                  onClick={(e) => {handleSolutionsType(e); document.getElementById('sol_2').scrollIntoView({ block: "center", behavior: 'smooth' })}}
                >
                  Electrical Substation Automation
                </li>
                <li 
                  className={css(style.linksDropdown)} 
                  id="" 
                  onClick={(e) => {handleSolutionsType(e); document.getElementById('sol_3').scrollIntoView({ block: "center", behavior: 'smooth' })}}
                >
                  Oil&Gas Control Systems
                </li>
                <li 
                  className={css(style.linksDropdown)} 
                  id="" 
                  onClick={(e) => {handleSolutionsType(e); document.getElementById('sol_4').scrollIntoView({ block: "center", behavior: 'smooth' })}}
                >
                  Vibration Analysis
                </li>
              </ul>
            </li>
            <li>
              <a 
                id='customers' 
                className={css(style.links)} 
                onClick={() => setPage('customers')}
              >
                Customers
              </a>              
            </li>
            <li onClick={toggleContactModal}>
              <span 
                className={css(style.links)} 
                onClick={() => {setShowDropdown(false); setShowBurger(false)}}
              >
                Contact
              </span>
            </li>
            <Modali.Modal {...contactModal}>
              <Contact />
            </Modali.Modal>
          </ul>
        </section>      
        <section className={css(style.page)}>
          {
            page === 'home' ? <Home /> : null
          }
          {
            page === 'about' ? <About /> : null
          }
          {
            page === 'solutions' ? <Solutions /> : null
          }
          {
            page === 'customers' ? <Customers /> : null
          }
        </section>
        <Footer
          typePage={setPage}
          modal={{contactModal, toggleContactModal}}
        />
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
    backgroundColor: '#D7D7D9',
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
    backgroundColor: '#D7D7D9',
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
      backgroundColor: '#D7D7D9',
      position: 'fixed',
      zIndex: '1',      
    }
  },
	headerTitle: {
		fontFamily: `'Questrial', sans-serif`,
		fontSize: '60px',
		fontWeight: 'light',
		color: '#D7D7D9',
		backgroundColor: '#011140',
		padding: '10px',
		marginBottom: '8px',
		width: '96px',
		border: '1px solid #D9D9D9',
    marginTop: '0',
    ':hover': {
      backgroundColor: 'transparent',
      border: '1px solid #405B73',
      color: '#031940',
    }
  },
  onScrollLogo: {
    fontFamily: `'Questrial', sans-serif`,
		fontSize: '40px',
		fontWeight: 'light',
		color: '#D7D7D9',
		backgroundColor: '#011140',
		padding: '10px',
		marginBottom: '0',
		width: '64px',
		border: '1px solid #011140',
    marginTop: '0',
    ':hover': {
      backgroundColor: 'transparent',
      border: '1px solid #405B73',
      color: '#031940',
    },
    '@media only screen and (max-width: 600px)': {
      ':hover': {
        color: '#D7D7D9',
		    backgroundColor: '#011140',
        border: '1px solid #011140',
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
    height: '100%',
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
    color: "#011140",
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
    },
    '@media only screen and (max-width: 600px)': {
      fontSize: '20px',
    }
  },
  dropdownMenu: {
    position: 'absolute',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: '1',
    listStyle: 'none',
    backgroundColor: '#1C3240',
    borderRadius: '2px',
    color: '#D7D7D9',
    fontFamily: `'Roboto', sans-serif`,
    fontWeight: '500',
    lineHeight: '30px',
    fontSize: '15px',
    '@media only screen and (max-width: 600px)': {
      backgroundColor: '#1C3240',
    }
  },
  hideDropdownMenu: {
    display: 'none',
  },
  linksDropdown: {
    cursor: 'pointer',
    padding: '5px 5px 0 10px',
    ':hover': {
      background: '#D7D7D9',
      color: '#1C3240',
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
      paddingTop: '100px',
    }
  },
});

export default App;

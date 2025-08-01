/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Modali, { useModali } from 'modali';

import Header from './components/header.js';
import Footer from './components/footer.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Solutions from './pages/solutions.js';
import Home from './pages/home.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import PerformanceMonitor from './components/PerformanceMonitor.js';

import burgerIcon from './images/menuBurger.png';
import burgerIconClose from './images/closeMenuBurger.png';

function App() {
  const [contactModal, toggleContactModal] = useModali({
    animated: true,
    centered: true,
  });
  const [page, setPage] = useState('home');
  const [windowScroll, setWindowScroll] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [curricula, setCurricula] = useState('experience');
  const [showBurger, setShowBurger] = useState(false);

  const changeHeaderOnWindowScroll = useCallback((e) => {
    if (window.scrollY > 10) {
      setWindowScroll(true);
      setShowDropdown(false);
    } else {
      setWindowScroll(false);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', changeHeaderOnWindowScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', changeHeaderOnWindowScroll);
    };
  }, [changeHeaderOnWindowScroll]);

  const handleClick = useCallback((e) => {
    setShowDropdown(prev => !prev);
    setPage(e.target.id);
  }, []);

  const handleSubMenu = useCallback((e) => {
    setShowDropdown(prev => !prev);
  }, []);

  const handleSolutionsType = useCallback((e) => {
    setShowDropdown(false);
    setCurricula(e.target.id);
    setPage('solutions');
  }, []);

  const handleBurger = useCallback(() => {
    setShowBurger(prev => !prev);
  }, []);

  const handleHomeClick = useCallback(() => {
    setPage('home');
    setShowBurger(false);
    window.scrollTo(0, 0);
  }, []);

  const handleAboutClick = useCallback((e) => {
    handleClick(e);
    setShowDropdown(false);
    setCurricula('experience');
    handleBurger();
    window.scroll(0, 0);
  }, [handleClick, handleBurger]);

  const handleSolutionsClick = useCallback((e) => {
    handleClick(e);
    setPage('solutions');
    window.scrollTo(0, 0);
  }, [handleClick]);



  const handleContactClick = useCallback(() => {
    setShowDropdown(false);
    handleBurger();
  }, [handleBurger]);

  const handleDropdownMouseOver = useCallback(() => {
    setShowDropdown(true);
  }, []);

  const handleDropdownMouseOut = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const handleSolutionsTypeClick = useCallback((e) => {
    handleSolutionsType(e);
    handleBurger();
    window.scrollTo(0, 0);
  }, [handleSolutionsType, handleBurger]);

  const handleSolutionsTypeClick2 = useCallback((e) => {
    handleSolutionsType(e);
    handleBurger();
    document.getElementById('sol_2').scrollIntoView({ block: "start", behavior: 'smooth' });
  }, [handleSolutionsType, handleBurger]);

  const handleSolutionsTypeClick3 = useCallback((e) => {
    handleSolutionsType(e);
    handleBurger();
    document.getElementById('sol_3').scrollIntoView({ block: "start", behavior: 'smooth' });
  }, [handleSolutionsType, handleBurger]);

  const handleSolutionsTypeClick4 = useCallback((e) => {
    handleSolutionsType(e);
    handleBurger();
    document.getElementById('sol_4').scrollIntoView({ block: "start", behavior: 'smooth' });
  }, [handleSolutionsType, handleBurger]);

  const handleDesktopHomeClick = useCallback((e) => {
    setPage('home');
    handleSubMenu(e);
    window.scrollTo(0, 0);
  }, [handleSubMenu]);

  const handleDesktopAboutClick = useCallback((e) => {
    handleClick(e);
    setShowDropdown(false);
    setCurricula('experience');
    setShowBurger(false);
    window.scroll(0, 0);
  }, [handleClick]);

  const handleDesktopSolutionsClick = useCallback((e) => {
    handleClick(e);
    setPage('solutions');
    window.scrollTo(0, 0);
  }, [handleClick]);

  const handleDesktopSolutionsTypeClick = useCallback((e) => {
    handleSolutionsType(e);
    window.scroll(0, 0);
  }, [handleSolutionsType]);

  const handleDesktopSolutionsTypeClick2 = useCallback((e) => {
    handleSolutionsType(e);
    document.getElementById('sol_2').scrollIntoView({ block: "center", behavior: 'smooth' });
  }, [handleSolutionsType]);

  const handleDesktopSolutionsTypeClick3 = useCallback((e) => {
    handleSolutionsType(e);
    document.getElementById('sol_3').scrollIntoView({ block: "center", behavior: 'smooth' });
  }, [handleSolutionsType]);

  const handleDesktopSolutionsTypeClick4 = useCallback((e) => {
    handleSolutionsType(e);
    document.getElementById('sol_4').scrollIntoView({ block: "center", behavior: 'smooth' });
  }, [handleSolutionsType]);



  const handleDesktopContactClick = useCallback(() => {
    setShowDropdown(false);
    setShowBurger(false);
  }, []);

  const handleBurgerClick = useCallback(() => {
    handleBurger();
    setShowDropdown(false);
  }, [handleBurger]);

  const currentPage = useMemo(() => {
    switch(page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'solutions':
        return <Solutions />;
      default:
        return <Home />;
    }
  }, [page]);

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div className={"App" && css(style.body)}>
          <section className={css(style.headerMobile)}>
            <Header 
              onClick={handleHomeClick} 
              onScrollLogo={css(style.onScrollLogo)} 
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <button 
                className={css(style.burger)} 
                onClick={handleBurgerClick}
                aria-label="Toggle mobile menu"
              >
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
                    onClick={handleAboutClick}
                  >
                    About me
                  </a>
                </li>
                <li style={{marginBottom: '10px'}}>
                  <a 
                    id='solutions'
                    className={css(style.links)}
                    onClick={handleSolutionsClick}
                  >
                    Solutions
                    <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
                  </a>
                  <ul className={ showDropdown ? css(style.dropdownMenu) : css(style.hideDropdownMenu)}>
                    <li 
                      className={css(style.linksDropdown)} 
                      id="" 
                      onClick={handleSolutionsTypeClick}
                    >
                      Turbine Control Systems
                    </li>
                    <li 
                      className={css(style.linksDropdown)} 
                      id="" 
                      onClick={handleSolutionsTypeClick2}
                    >
                      Electrical Substation Automation
                    </li>
                    <li 
                      className={css(style.linksDropdown)} 
                      id="" 
                      onClick={handleSolutionsTypeClick3}
                    >
                      Oil&Gas Control Systems
                    </li>
                    <li 
                      className={css(style.linksDropdown)} 
                      id="" 
                      onClick={handleSolutionsTypeClick4}
                    >
                      Vibration Analysis
                    </li>
                  </ul>
                </li>

                <li 
                  onClick={toggleContactModal} 
                  style={{marginBottom: '10px'}}
                >
                  <span 
                    className={css(style.links)} 
                    onClick={handleContactClick}
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
              onClick={handleDesktopHomeClick} 
              onScroll={ windowScroll ? css(style.onScroll) : css(style.headerDescription)} onScrollLogo={windowScroll ? css(style.onScrollLogo) : css(style.headerTitle)}
            />
            <ul className={css(style.menu)}>
              <li>
                <a 
                  id='about' 
                  className={css(style.links)} 
                  onClick={handleDesktopAboutClick}
                >
                  About me
                </a>
              </li>
              <li className={css(style.menuItem)}>
                <a 
                  id='solutions' 
                  className={css(style.links)} 
                  onClick={handleDesktopSolutionsClick} 
                  onMouseOver={handleDropdownMouseOver}
                  onMouseOut={handleDropdownMouseOut}
                >
                  Solutions
                  <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>
                </a>              
                <ul 
                  onMouseOver={handleDropdownMouseOver} 
                  onMouseOut={handleDropdownMouseOut} 
                  className={ showDropdown ? css(style.dropdownMenu) : css(style.hideDropdownMenu)}>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={handleDesktopSolutionsTypeClick}
                  >
                    Turbine Control Systems
                  </li>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={handleDesktopSolutionsTypeClick2}
                  >
                    Electrical Substation Automation
                  </li>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={handleDesktopSolutionsTypeClick3}
                  >
                    Oil&Gas Control Systems
                  </li>
                  <li 
                    className={css(style.linksDropdown)} 
                    id="" 
                    onClick={handleDesktopSolutionsTypeClick4}
                  >
                    Vibration Analysis
                  </li>
                </ul>
              </li>

              <li onClick={toggleContactModal}>
                <span 
                  className={css(style.links)} 
                  onClick={handleDesktopContactClick}
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
            {currentPage}
          </section>
          <Footer
            typePage={setPage}
            modal={{contactModal, toggleContactModal}}
          />
      </div>
    </ErrorBoundary>
  );
}

const style = StyleSheet.create ({
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
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
		fontFamily: `'Inter', 'Arial', sans-serif`,
		fontSize: '60px',
		fontWeight: '300',
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
    fontFamily: `'Inter', 'Arial', sans-serif`,
		fontSize: '40px',
		fontWeight: '300',
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
    position: 'relative',
    '@media only screen and (max-width: 600px)': {
      display: 'none',
    }
  },
  menuItem: {
    position: 'relative',
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
    fontFamily: `'Inter', 'Arial', sans-serif`,
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
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
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '8px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: '1000',
    listStyle: 'none',
    backgroundColor: '#fff',
    borderRadius: '8px',
    color: '#011140',
    fontFamily: `'Inter', 'Arial', sans-serif`,
    fontWeight: '500',
    fontSize: '14px',
    minWidth: '220px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(1, 17, 64, 0.1)',
    animation: 'fadeIn 0.2s ease-out',
    '@media only screen and (max-width: 600px)': {
      backgroundColor: '#fff',
      position: 'static',
      boxShadow: 'none',
      border: 'none',
      marginTop: '8px',
      marginLeft: '20px',
      minWidth: 'auto',
      transform: 'none',
    }
  },
  hideDropdownMenu: {
    display: 'none',
  },
  linksDropdown: {
    cursor: 'pointer',
    padding: '12px 16px',
    transition: 'all 0.2s ease',
    borderBottom: '1px solid rgba(1, 17, 64, 0.05)',
    ':hover': {
      background: 'linear-gradient(135deg, #011140 0%, #405B73 100%)',
      color: '#fff',
      transform: 'translateX(4px)',
    },
    ':last-child': {
      borderBottom: 'none',
    },
    '@media only screen and (max-width: 600px)': {
      padding: '8px 12px',
      fontSize: '16px',
      ':hover': {
        background: 'rgba(1, 17, 64, 0.1)',
        color: '#011140',
        transform: 'none',
      },
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

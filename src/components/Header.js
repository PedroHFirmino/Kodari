import React, {useState} from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo (1).png';
import '../media.css'


const Header = () =>{
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () =>{
        setIsMenuOpen(false);
    }

    return(
<>
  {isMenuOpen && (
    <div style={styles.overlay} onClick={closeMenu}></div>
  )}
  <header style={styles.header}>
    <nav style={styles.navbar}> 
      <div style={styles.menuContainer} className="header-menu-container">
        {/* Logo centralizado */}
        <div style={styles.logoContainer}>
          <Link to='/'>
            <img src={logo} style={styles.logo} alt="Kodari"></img>
          </Link>
        </div>
        
        {/* Menu principal */}
        <ul style={styles.mainMenu} className="main-menu-desktop">
          <li style={styles.menuItem}>
            <Link to='/hrm' style={styles.link}>Kodari HRM</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to='/enterprise' style={styles.link}>Kodari Enterprise</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to='/solutions' style={styles.link}>Soluções</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to='/experiences' style={styles.link}>Experiências</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to='/about' style={styles.link}>Sobre Nós</Link>
          </li>
        </ul>

        {/* Menu direito */}
        <div style={styles.rightMenuContainer}>
          <button style={styles.searchButton} aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button
            className="hamburger"
            style={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <span style={styles.hamburgerBar}></span>
            <span style={styles.hamburgerBar}></span>
            <span style={styles.hamburgerBar}></span>
          </button>
        </div>
      </div>
      {/* Menu mobile lateral */}
      <div className={`mobile-drawer${isMenuOpen ? ' open' : ''}`} style={styles.mobileDrawer}>
        <div style={styles.drawerHeader}>
          <Link to='/' onClick={closeMenu}>
            <img src={logo} style={styles.logo} className="hover:scale-110"></img>
          </Link>
          <button style={styles.closeButton} onClick={closeMenu} aria-label="Fechar menu">×</button>
        </div>
        <ul style={styles.drawerMenu}>
          <li style={styles.drawerLi}>
            <Link to='/hrm' onClick={closeMenu} style={styles.drawerLink}>Kodari HRM</Link>
          </li>
          <li style={styles.drawerLi}>
            <Link to='/enterprise' onClick={closeMenu} style={styles.drawerLink}>Kodari Enterprise</Link>
          </li>
          <li style={styles.drawerLi}>
            <Link to='/solutions' onClick={closeMenu} style={styles.drawerLink}>Soluções</Link>
          </li>
          <li style={styles.drawerLi}>
            <Link to='/experiences' onClick={closeMenu} style={styles.drawerLink}>Experiências</Link>
          </li>
          <li style={styles.drawerLi}>
            <Link to='/about' onClick={closeMenu} style={styles.drawerLink}>Sobre Nós</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</>
)};
export default Header;


/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {

header: {
    backgroundColor: '#ffffff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
},

navbar: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
},

logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
},

logo: {
    width: '120px',
    height: 'auto',
    transition: 'transform 0.3s ease',
},

mainMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: '40px',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center',
},

menuItem: {
    position: 'relative',
},

link: {
    textDecoration: 'none',
    color: '#333333',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease',
    position: 'relative',
    padding: '10px 0',
},

rightMenuContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flex: '0 0 auto',
},

searchButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333333',
},

hamburger: {
    display: 'none', 
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    marginRight: '16px',
  },
  hamburgerBar: {
    width: '26px',
    height: '2px',
    background: '#fff',
    margin: '3px 0',
    borderRadius: '2px',
    transition: '0.3s',
    
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  logoHamburgerContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    flexDirection: 'column',
    alignItems: 'center'
  },
  mobileDrawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '85vw',
    maxWidth: 400,
    background: '#ffffff',
    zIndex: 1100,
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 30px 0 30px',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 0 50px rgba(0, 0, 0, 0.1)',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingBottom: 20,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#333333',
    fontSize: 32,
    cursor: 'pointer',
    lineHeight: 1,
    padding: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
  drawerMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  drawerLi: {
    margin: 0,
  },
  drawerLink: {
    fontSize: 18,
    textDecoration: 'none',
    color: '#333333',
    padding: '16px 0',
    display: 'block',
    fontWeight: '500',
    letterSpacing: '0.5px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'color 0.3s ease',
  },
}
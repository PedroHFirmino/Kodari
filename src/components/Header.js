import React, {useState} from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo (1).png';
import './css/media.css'


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
        {/*leftMenu */}
        <div className="header-left-group" style={{display: 'flex', alignItems: 'center', gap: 24}}>
          <div style={styles.logoHamburgerContainer}>
            <Link to='/'>
              <img src={logo} style={styles.logo}></img>
            </Link>
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
          <ul style={styles.leftMenu} className="left-menu-desktop">
            <li style={styles.li}>
              <Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Sobre</Link>
            </li>
            <li style={styles.li}>
              <Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Planos</Link>
            </li>
            <li style={styles.li}>
              <Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Para Empresas</Link>
            </li>
            <li style={styles.li}>
              <Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Blog</Link>
            </li>
          </ul>
        </div>
        {/*rightMenu */}
        <div className="header-right-group" style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <ul style={styles.rightMenu} className="right-menu-desktop">
            <li style={styles.sign}>
              <Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Entrar</Link>
            </li>
            <li style={styles.signup}>
              <Link to='/' className="text-white hover:text-neutral-500 transition duration-300" style={styles.link}>Criar uma conta</Link>
            </li>
          </ul>
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
            <Link to='/' onClick={closeMenu} style={styles.drawerLink} className="text-white hover:text-neutral-500 transition duration-300">Sobre</Link>
          </li>
          <li style={styles.drawerLi}>
            <Link to='/' onClick={closeMenu} style={styles.drawerLink} className="text-white hover:text-neutral-500 transition duration-300">Preços</Link>
          </li>
          <li style={styles.drawerLi}>
            <Link to='/' onClick={closeMenu} style={styles.drawerLink} className="text-white hover:text-neutral-500 transition duration-300">Blog</Link>
          </li>
        </ul>
        <div style={styles.drawerActions}>
          <Link to='/' onClick={closeMenu} style={styles.drawerLoginBtn} className="text-white hover:text-neutral-500 transition duration-300">Entrar</Link>
          <Link to='/' onClick={closeMenu} style={styles.drawerSignupBtn}className="text-green-300 hover:text-neutral-500 transition duration-300">Criar uma conta</Link>
        </div>
      </div>
    </nav>
  </header>
</>
)};
export default Header;


/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {

header: {
    backgroundColor: '#0d1117',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #ff6b35'
    

},

title: {
    color: 'white',
    fontSize: 33,
    width: '100%',
    textAlign: 'center'
    
},

logo:{
    width: '60px',
    height: 'auto',
},

navbar: {
    width:'100%',
    maxWidth: 1200,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    padding: '20px'

},

menuContainer: {
  display:'flex',
  alignItems: 'center', 
  justifyContent: 'space-between', 
  width: '100%',
  maxWidth: 1200,
  position: 'relative',
},

rightMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: 20,
    padding: 0,
    margin: 0,
    fontSize: '16px',
    alignItems: 'center'


},

leftMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: 20,
    padding: 0,
    margin: 0,
    fontSize: '16px',
    alignItems: 'center'

},


sign: {
     display:'flex',
     gap:5,

},

signup: {
    display:'flex',
    gap:5,
    padding: '5px 10px',
    borderRadius: '5px',
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',

},


link: {
    textDecoration: "none",
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
    maxWidth: 340,
    background: '#16181d',
    zIndex: 1100,
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 16px 0 16px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: 36,
    cursor: 'pointer',
    lineHeight: 1,
  },
  drawerMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  drawerLi: {
    margin: 0,
  },
  drawerLink: {
    fontSize: 16,
    textDecoration: 'none',
    padding: '2px 0',
    display: 'block',
  },
  drawerActions: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  drawerLoginBtn: {
    background: 'none',
    border: '1px solid #fff',
    fontSize: 18,
    padding: '10px 0',
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background 0.2s',
  },
  drawerSignupBtn: {
    background: 'none',
    border: '1px solid #ffff',
    fontSize: 18,
    padding: '10px 0',
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background 0.2s',
  },
}
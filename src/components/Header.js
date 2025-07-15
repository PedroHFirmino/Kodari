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

<header style={styles.header}>
    <nav style={styles.navbar}> 
        <div 
        style={styles.menuContainer}
        className={`header-menu-container${isMenuOpen ? ' open' : ''}`}>
            <ul style={styles.leftMenu}>
            <Link to='/'>
                    <img src={logo} style={styles.logo}></img>
                </Link>
                <button
                    className="hamburger"
                    style={styles.hamburger}
                    onClick={toggleMenu}
                    >
                    <span style={styles.hamburgerBar}></span>
                    <span style={styles.hamburgerBar}></span>
                    <span style={styles.hamburgerBar}></span>
                </button>
                <li style={styles.li}>
                    <Link 
                    to='/' 
                    onClick={closeMenu} 
                    style={styles.link}
                    className="text-white hover:text-neutral-500 transition duration-300">
                    Sobre</Link></li>

                <li style={styles.li}>
                    <Link 
                    to ='/' 
                    onClick={toggleMenu} 
                    style={styles.link}
                    className="text-white hover:text-neutral-500 transition duration-300">
                    Preços</Link></li>

                    
                <li style={styles.li}>
                    <Link 
                    to ='/' 
                    onClick={toggleMenu} 
                    style={styles.link}
                    className="text-white hover:text-neutral-500 transition duration-300">
                    Blog</Link></li>
            </ul>

            {/* Sign in */}
            <ul style={styles.rightMenu}>
                <li style={styles.sign}>
                    <Link 
                        to='/' 
                        onClick={closeMenu} 
                        style={styles.link} 
                        className="text-white hover:text-neutral-500 transition duration-300"> Entrar</Link></li>
            {/* Sign up */}
                <li style={styles.signup}>
                    <Link 
                        to='/' 
                        onClick={closeMenu}
                        className="text-white hover:text-neutral-500 transition duration-300"
                        style={styles.link} 
                        > Criar uma conta</Link></li>
            </ul> 
        </div>     
    </nav>
</header>

)};
export default Header;


/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {

header: {
    backgroundColor: '#0d1117',
    display: 'flex',
    justifyContent: 'center'
    

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
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
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
    display: 'none', // será sobrescrito pelo CSS em mobile
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    marginRight: '16px'
  },
  hamburgerBar: {
    width: '28px',
    height: '4px',
    background: '#fff',
    margin: '3px 0',
    borderRadius: '2px',
    transition: '0.3s'
  }
}
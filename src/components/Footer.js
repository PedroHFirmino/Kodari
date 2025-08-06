import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo (2).png';
import './css/media.css'


const Footer = () => {


return(
<footer style={styles.footer}>
  <nav>
    <div style={styles.footerContainer} className="footer-responsive">
      <div style={styles.logoContainer}>
        <Link to='/'>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
      </div>

      <div style={styles.rightFooter} className="footer-right-responsive">
        <ul style={styles.column}>
          <li style={styles.title}>Kodari</li>
          <li><Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Sobre</Link></li>
          <li><Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Termos</Link></li>
        </ul>

        <ul style={styles.column}>
          <li style={styles.title}>Planos</li>
          <li><Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Preços</Link></li>
        </ul>
        
        <ul style={styles.column}>
          <li style={styles.title}>Para Empresas</li>
          <li><Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Preços</Link></li>
        </ul>

        <ul style={styles.column}>
          <li style={styles.title}>Notícias</li>
          <li><Link to='/' style={styles.link} className="text-white hover:text-neutral-500 transition duration-300">Blog</Link></li>
        </ul>
      </div>
    </div>
  </nav>
</footer>
)};
export default Footer;

/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {

    footer: {
        backgroundColor: '#0d1117',
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0',
        borderTop: '1px solid #ff6b35'
        
    
    },
    
    title: {
        color: 'white',
        fontSize: 16,
        letterSpacing: 2,
        marginBottom: 12,
        width: '100%',
        textAlign: 'center',
        
    },
    
    navbar: {
        width:'100%',
        maxWidth: 1200,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    
    },
    footerContainer: {
        display:'flex',
        justifyContent: 'center',
        gap:'705px'
    },
    
    rightFooter: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0px',
        fontSize: '16px',
    
    },
    
    leftFooter: {
        listStyle: 'none',
        display: 'flex',
        gap: 20,
        padding: 0,
        margin: 0,
        fontSize: '16px',
        alignItems: 'center'
    
    },

    column: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        padding: 0,
        margin: 0,
        fontSize: '16px',
        alignItems: 'center',
        minWidth: '120px'
      },

      logo:{
        width: '100px',
        height: 'auto',

    },
    

}

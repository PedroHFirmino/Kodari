import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo (2).png';
import '../media.css'


const Footer = () => {


return(
<footer style={styles.footer}>
  <div style={styles.footerContainer}>
    {/* Logo e descrição */}
    <div style={styles.footerTop}>
      <div style={styles.logoSection}>
        <Link to='/'>
          <img src={logo} alt="Kodari" style={styles.logo} />
        </Link>
        <p style={styles.footerDescription}>
          Ecossistema completo de soluções para gestão empresarial, 
          integrando RH e Enterprise em uma única plataforma.
        </p>
      </div>
    </div>

    {/* Links organizados por categoria */}
    <div style={styles.footerLinks}>
      <div style={styles.linkColumn}>
        <h4 style={styles.columnTitle}>Kodari HRM</h4>
        <ul style={styles.linkList}>
          <li><Link to='/kodariponto' style={styles.link}>KodariPonto</Link></li>
          <li><Link to='/hrm-1' style={styles.link}>HRM 1.0</Link></li>
          <li><Link to='/gestao-pessoas' style={styles.link}>Gestão de Pessoas</Link></li>
          <li><Link to='/hrm' style={styles.link}>Configure your HRM</Link></li>
        </ul>
      </div>

      <div style={styles.linkColumn}>
        <h4 style={styles.columnTitle}>Kodari Enterprise</h4>
        <ul style={styles.linkList}>
          <li><Link to='/enterprise' style={styles.link}>Range</Link></li>
          <li><Link to='/enterprise' style={styles.link}>Configure your Enterprise</Link></li>
          <li><Link to='/enterprise' style={styles.link}>MyKodari</Link></li>
          <li><Link to='/enterprise' style={styles.link}>Pre-owned</Link></li>
        </ul>
      </div>

      <div style={styles.linkColumn}>
        <h4 style={styles.columnTitle}>Collections</h4>
        <ul style={styles.linkList}>
          <li><Link to='/collections' style={styles.link}>Men</Link></li>
          <li><Link to='/collections' style={styles.link}>Women</Link></li>
          <li><Link to='/collections' style={styles.link}>Kids</Link></li>
          <li><Link to='/collections' style={styles.link}>Scuderia Kodari Selection</Link></li>
        </ul>
      </div>

      <div style={styles.linkColumn}>
        <h4 style={styles.columnTitle}>Experiences</h4>
        <ul style={styles.linkList}>
          <li><Link to='/experiences' style={styles.link}>Clienti</Link></li>
          <li><Link to='/experiences' style={styles.link}>Kodari Esports Series</Link></li>
          <li><Link to='/experiences' style={styles.link}>Ristorante Kodari</Link></li>
          <li><Link to='/experiences' style={styles.link}>Kodari Museums</Link></li>
        </ul>
      </div>

      <div style={styles.linkColumn}>
        <h4 style={styles.columnTitle}>About us</h4>
        <ul style={styles.linkList}>
          <li><Link to='/about' style={styles.link}>Corporate</Link></li>
          <li><Link to='/about' style={styles.link}>Sustainability</Link></li>
          <li><Link to='/about' style={styles.link}>Media Centre</Link></li>
          <li><Link to='/about' style={styles.link}>News</Link></li>
          <li><Link to='/about' style={styles.link}>Magazine</Link></li>
          <li><Link to='/about' style={styles.link}>History</Link></li>
          <li><Link to='/about' style={styles.link}>Join us</Link></li>
        </ul>
      </div>
    </div>

    {/* Redes sociais */}
    <div style={styles.socialSection}>
      <div style={styles.socialLinks}>
        <a href="#" style={styles.socialLink}>Facebook</a>
        <a href="#" style={styles.socialLink}>Instagram</a>
        <a href="#" style={styles.socialLink}>LinkedIn</a>
        <a href="#" style={styles.socialLink}>TikTok</a>
        <a href="#" style={styles.socialLink}>Twitch</a>
        <a href="#" style={styles.socialLink}>X</a>
        <a href="#" style={styles.socialLink}>YouTube</a>
      </div>
    </div>

    {/* Informações legais */}
    <div style={styles.legalSection}>
      <div style={styles.legalInfo}>
        <p style={styles.legalText}>
          Kodari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, 
          the Netherlands and its corporate address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), 
          Italy, registered with the Dutch trade register under number 64060977
        </p>
        <p style={styles.legalText}>
          Kodari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, 
          Modena, Italy, Companies' Register of Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000
        </p>
        <p style={styles.copyright}>
          Copyright 2025 - All rights reserved
        </p>
      </div>
      <div style={styles.legalLinks}>
        <Link to='/legal' style={styles.legalLink}>Legal</Link>
        <Link to='/privacy' style={styles.legalLink}>Privacy Policy</Link>
        <Link to='/cookies' style={styles.legalLink}>Cookie Policy</Link>
        <Link to='/accessibility' style={styles.legalLink}>Accessibility</Link>
        <Link to='/contacts' style={styles.legalLink}>Contacts</Link>
        <Link to='/media' style={styles.legalLink}>Media Centre</Link>
      </div>
    </div>
  </div>
</footer>
)};
export default Footer;

/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {
    footer: {
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '60px 0 20px 0',
    },

    footerContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
    },

    footerTop: {
        marginBottom: '60px',
        textAlign: 'center',
    },

    logoSection: {
        maxWidth: '600px',
        margin: '0 auto',
    },

    logo: {
        width: '120px',
        height: 'auto',
        marginBottom: '20px',
    },

    footerDescription: {
        fontSize: '16px',
        color: '#666666',
        lineHeight: '1.6',
        margin: 0,
    },

    footerLinks: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
    },

    linkColumn: {
        display: 'flex',
        flexDirection: 'column',
    },

    columnTitle: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#333333',
        marginBottom: '20px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },

    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },

    link: {
        color: '#666666',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.3s ease',
        lineHeight: '1.4',
    },

    socialSection: {
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '30px 0',
        marginBottom: '30px',
    },

    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
    },

    socialLink: {
        color: '#666666',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'color 0.3s ease',
    },

    legalSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },

    legalInfo: {
        textAlign: 'center',
    },

    legalText: {
        fontSize: '12px',
        color: '#999999',
        lineHeight: '1.5',
        margin: '0 0 10px 0',
    },

    copyright: {
        fontSize: '12px',
        color: '#999999',
        fontWeight: '500',
        margin: '20px 0 0 0',
    },

    legalLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    },

    legalLink: {
        color: '#999999',
        textDecoration: 'none',
        fontSize: '12px',
        transition: 'color 0.3s ease',
    },
}

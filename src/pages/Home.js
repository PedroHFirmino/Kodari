import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import VideoHome from '../components/VideoHome';

import imagetest from '../assets/imagetest.png';
import imagetest2 from '../assets/imagetest2.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const bannerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const iconsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-child", {
                autoAlpha: 0,
                y: 50,
                stagger: 0.2,
                ease: "expo.out",
                duration: 1.5,
                delay: 0.5
            });

            const featureSections = gsap.utils.toArray('.feature-section');
            featureSections.forEach((section) => {
                const children = gsap.utils.toArray(section.querySelectorAll('.feature-child'));
                
                gsap.from(children, {
                    autoAlpha: 0,
                    y: 50,
                    stagger: 0.2,
                    duration: 1,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        });

        return () => ctx.revert(); 
    }, []);

    return (
        <>
        <div style={styles.pageWrapper}> 
    
        <div ref={bannerRef} style={styles.pageContainer}>
            <VideoHome />
            <section style={styles.section} className="feature-section">
                <div style={{...styles.container, ...styles.featureLayout}}>
                    <div style={styles.textContainer} className="feature-child">
                        <h1 ref={titleRef} style={styles.heroTitle}>
                            START YOUR <span style={styles.titleHighlight}>ECOSYSTEM</span>
                        </h1>
                        <p ref={descriptionRef} style={styles.heroSubtitle}>
                            Discover the Kodari Line Up
                        </p>
                        <Link ref={buttonRef} to="/solutions" style={styles.heroButton}>
                            Discover
                        </Link>
                    </div>
                    <div style={styles.imageContainer} className="feature-child">
                        <img src={imagetest} alt="Kodari Ecosystem" style={styles.mainImage} />
                    </div>
                </div>
            </section>
        </div>

     
        <section style={styles.navigationSection}>
            <div style={styles.navigationGrid}>
                <div style={styles.navCard}>
                    <h3 style={styles.navTitle}>Kodari HRM</h3>
                    <p style={styles.navDescription}>Sistema completo de gestão de recursos humanos</p>
                    <Link to="/hrm" style={styles.navLink}>Discover more</Link>
                </div>
                <div style={styles.navCard}>
                    <h3 style={styles.navTitle}>Kodari Enterprise</h3>
                    <p style={styles.navDescription}>Gestão de projetos empresariais</p>
                    <Link to="/enterprise" style={styles.navLink}>Discover more</Link>
                </div>
                <div style={styles.navCard}>
                    <h3 style={styles.navTitle}>Collections</h3>
                    <p style={styles.navDescription}>New Arrivals</p>
                    <Link to="/collections" style={styles.navLink}>Discover</Link>
                </div>
            </div>
        </section>

        <section style={styles.newsSection}>
            <div style={styles.newsContainer}>
                <h2 style={styles.newsTitle}>Latest Updates</h2>
                <div style={styles.newsGrid}>
                    <article style={styles.newsCard}>
                        <div style={styles.newsImage}>
                            <img src={imagetest2} alt="KodariPonto Update" style={styles.newsImg} />
                        </div>
                        <div style={styles.newsContent}>
                            <h3 style={styles.newsCardTitle}>KodariPonto 2.0</h3>
                            <p style={styles.newsCardDescription}>
                                Nova versão do sistema de controle de ponto com IA integrada para análise de produtividade.
                            </p>
                            <Link to="/news/kodariponto-2" style={styles.newsLink}>Read more</Link>
                        </div>
                    </article>
                    <article style={styles.newsCard}>
                        <div style={styles.newsImage}>
                            <img src={imagetest} alt="HRM Partnership" style={styles.newsImg} />
                        </div>
                        <div style={styles.newsContent}>
                            <h3 style={styles.newsCardTitle}>Kodari HRM Partnership</h3>
                            <p style={styles.newsCardDescription}>
                                Kodari HRM anuncia parceria com líderes em soluções de RH para expandir funcionalidades.
                            </p>
                            <Link to="/news/hrm-partnership" style={styles.newsLink}>Read more</Link>
                        </div>
                    </article>
                    <article style={styles.newsCard}>
                        <div style={styles.newsImage}>
                            <img src={imagetest2} alt="Enterprise Update" style={styles.newsImg} />
                        </div>
                        <div style={styles.newsContent}>
                            <h3 style={styles.newsCardTitle}>Enterprise Integration</h3>
                            <p style={styles.newsCardDescription}>
                                Testes de integração do sistema Enterprise com principais ERPs do mercado.
                            </p>
                            <Link to="/news/enterprise-integration" style={styles.newsLink}>Read more</Link>
                        </div>
                    </article>
                </div>
                <div style={styles.newsFooter}>
                    <Link to="/news" style={styles.viewAllNews}>View all news</Link>
                </div>
            </div>
        </section>
     
        <section style={styles.collectionsSection}>
            <div style={styles.collectionsContainer}>
                <div style={styles.collectionsGrid}>
                    <div style={styles.collectionCard}>
                        <div style={styles.collectionImage}>
                            <img src={imagetest} alt="KodariPonto" style={styles.collectionImg} />
                        </div>
                        <div style={styles.collectionContent}>
                            <h3 style={styles.collectionTitle}>KodariPonto</h3>
                            <p style={styles.collectionDescription}>Controle de Ponto Digital</p>
                            <Link to="/kodariponto" style={styles.collectionLink}>Discover more</Link>
                        </div>
                    </div>
                    <div style={styles.collectionCard}>
                        <div style={styles.collectionImage}>
                            <img src={imagetest2} alt="HRM 1.0" style={styles.collectionImg} />
                        </div>
                        <div style={styles.collectionContent}>
                            <h3 style={styles.collectionTitle}>HRM 1.0</h3>
                            <p style={styles.collectionDescription}>Sistema de Recrutamento</p>
                            <Link to="/hrm-1" style={styles.collectionLink}>Discover more</Link>
                        </div>
                    </div>
                    <div style={styles.collectionCard}>
                        <div style={styles.collectionImage}>
                            <img src={imagetest} alt="Gestão de Pessoas" style={styles.collectionImg} />
                        </div>
                        <div style={styles.collectionContent}>
                            <h3 style={styles.collectionTitle}>Gestão de Pessoas</h3>
                            <p style={styles.collectionDescription}>Avaliações e Performance</p>
                            <Link to="/gestao-pessoas" style={styles.collectionLink}>Discover more</Link>
                        </div>
                    </div>
                    <div style={styles.collectionCard}>
                        <div style={styles.collectionImage}>
                            <img src={imagetest2} alt="Enterprise" style={styles.collectionImg} />
                        </div>
                        <div style={styles.collectionContent}>
                            <h3 style={styles.collectionTitle}>Enterprise</h3>
                            <p style={styles.collectionDescription}>Gestão de Projetos</p>
                            <Link to="/enterprise" style={styles.collectionLink}>Discover more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style={styles.contactSection}>
            <div style={styles.contactContainer}>
                <h2 style={styles.contactTitle}>Pronto para transformar sua empresa?</h2>
                <p style={styles.contactDescription}>
                    Entre em contato conosco e descubra como o Ecossistema Kodari pode revolucionar a gestão da sua empresa.
                </p>
                <div style={styles.contactButtons}>
                    <Link to="/demo" style={styles.primaryButton}>Solicitar Demo</Link>
                    <Link to="/contato" style={styles.secondaryButton}>Falar com Especialista</Link>
                </div>
            </div>
        </section>
    </div>
    </>
);
    
}



export default Home;
/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {
    pageWrapper: {
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#333333',
        paddingTop: '80px', 
    },

  
    heroSection: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    },

    heroContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        width: '100%',
        gap: '60px',
    },

    heroText: {
        flex: '1',
        maxWidth: '600px',
    },

    heroTitle: {
        fontSize: 'clamp(3rem, 6vw, 5rem)',
        fontWeight: '300',
        lineHeight: '1.1',
        marginBottom: '20px',
        letterSpacing: '-0.02em',
        color: '#333333',
    },

    heroSubtitle: {
        fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
        fontWeight: '300',
        color: '#666666',
        marginBottom: '40px',
        lineHeight: '1.4',
    },

    heroButton: {
        display: 'inline-block',
        background: '#ff6b35',
        color: '#ffffff',
        padding: '16px 40px',
        borderRadius: '0',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        border: '2px solid #ff6b35',
    },

    heroImage: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainImage: {
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        borderRadius: '8px',
    },

    // Navigation Section
    navigationSection: {
        padding: '80px 20px',
        background: '#ffffff',
    },

    navigationGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
    },

    navCard: {
        textAlign: 'center',
        padding: '40px 20px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },

    navTitle: {
        fontSize: '24px',
        fontWeight: '500',
        marginBottom: '16px',
        color: '#333333',
        letterSpacing: '0.5px',
    },

    navDescription: {
        fontSize: '16px',
        color: '#666666',
        marginBottom: '24px',
        lineHeight: '1.5',
    },

    navLink: {
        color: '#ff6b35',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'color 0.3s ease',
    },

    // News Section
    newsSection: {
        padding: '80px 20px',
        background: '#f8f9fa',
    },

    newsContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
    },

    newsTitle: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '60px',
        color: '#333333',
        letterSpacing: '-0.01em',
    },

    newsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
    },

    newsCard: {
        background: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    },

    newsImage: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
    },

    newsImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    newsContent: {
        padding: '30px',
    },

    newsCardTitle: {
        fontSize: '20px',
        fontWeight: '500',
        marginBottom: '12px',
        color: '#333333',
        lineHeight: '1.3',
    },

    newsCardDescription: {
        fontSize: '16px',
        color: '#666666',
        lineHeight: '1.5',
        marginBottom: '20px',
    },

    newsLink: {
        color: '#ff6b35',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },

    newsFooter: {
        textAlign: 'center',
    },

    viewAllNews: {
        color: '#ff6b35',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        borderBottom: '1px solid #ff6b35',
        paddingBottom: '4px',
    },

    // Collections Section
    collectionsSection: {
        padding: '80px 20px',
        background: '#ffffff',
    },

    collectionsContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
    },

    collectionsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
    },

    collectionCard: {
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },

    collectionImage: {
        width: '100%',
        height: '250px',
        overflow: 'hidden',
        borderRadius: '8px',
        marginBottom: '20px',
    },

    collectionImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    },

    collectionContent: {
        padding: '0 10px',
    },

    collectionTitle: {
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '8px',
        color: '#333333',
        letterSpacing: '0.5px',
    },

    collectionDescription: {
        fontSize: '14px',
        color: '#666666',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },

    collectionLink: {
        color: '#ff6b35',
        textDecoration: 'none',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    titleHighlight: {
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },

 
    pageContainer: {
        width: '100%',
        minHeight: '100vh',
    },

    section: {
        padding: '80px 20px',
        background: '#ffffff',
    },

    container: {
        maxWidth: '1400px',
        margin: '0 auto',
    },

    featureLayout: {
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        minHeight: '500px',
    },

    textContainer: {
        flex: '1',
        maxWidth: '600px',
    },

    imageContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contactSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(247, 147, 30, 0.05))',
    },

    contactContainer: {
        textAlign: 'center',
        maxWidth: '800px',
        width: '100%',
    },

    contactTitle: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 'bold',
        marginBottom: '24px',
        lineHeight: '1.2',
        color: '#333333'
    },

    contactDescription: {
        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
        color: 'rgba(51, 51, 51, 0.8)',
        marginBottom: '40px',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 40px auto',
    },

    contactButtons: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    primaryButton: {
        display: 'inline-block',
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        color: '#ffffff',
        padding: '16px 32px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
        border: 'none',
    },

    secondaryButton: {
        display: 'inline-block',
        background: 'transparent',
        color: '#ff6b35',
        padding: '16px 32px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        border: '2px solid #ff6b35',
    },



};

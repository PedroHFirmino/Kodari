import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import imagetest from '../assets/imagetest.png';
import imagetest2 from '../assets/imagetest2.png';

gsap.registerPlugin(ScrollTrigger, Draggable);

const Home = () => {
    const bannerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const iconsRef = useRef(null);

    useEffect(() => {
       
        const tl = gsap.timeline();
        
        tl.fromTo(titleRef.current, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
        .fromTo(descriptionRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
            "-=0.5"
        )
        .fromTo(buttonRef.current, 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, 
            "-=0.3"
        );

        // Icon animation
        const icons = iconsRef.current?.children;
        if (icons) {
            
            Array.from(icons).forEach((icon, index) => {
                const x = Math.random() * 80 + 10; 
                const y = Math.random() * 80 + 10; 
                const delay = Math.random() * 2; 
                
                gsap.set(icon, {
                    left: `${x}%`,
                    top: `${y}%`
                });

                // Floating icon
                gsap.to(icon, {
                    y: -15,
                    duration: 2 + Math.random() * 2,
                    ease: "power1.inOut",
                    delay: delay,
                    repeat: -1,
                    yoyo: true
                });

                // hover
                icon.addEventListener('mouseenter', () => {
                    if (!Draggable.get(icon)?.isDragging) {
                        gsap.to(icon, {
                            scale: 1.2,
                            background: 'rgba(255, 255, 255, 0.15)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            duration: 0.3
                        });
                    }
                });

                icon.addEventListener('mouseleave', () => {
                    if (!Draggable.get(icon)?.isDragging) {
                        gsap.to(icon, {
                            scale: 1,
                            background: 'rgba(255, 255, 255, 0.08)',
                            color: 'rgba(255, 255, 255, 0.6)',
                            duration: 0.3
                        });
                    }
                });

                // Draggle for icons
                Draggable.create(icon, {
                    type: "x,y",
                    bounds: ".floating-icons-container",
                    inertia: true,
                    onPress: function() {
                      
                        gsap.set(icon, { cursor: 'grabbing' });
                    },
                    onDragStart: function() {
                      
                        gsap.killTweensOf(icon);
                        gsap.to(icon, {
                            scale: 1.3,
                            background: 'rgba(255, 255, 255, 0.25)',
                            color: 'rgba(255, 255, 255, 1)',
                            duration: 0.2,
                            zIndex: 1000,
                            boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)'
                        });
                        
          
                        gsap.to(icon, {
                            boxShadow: '0 12px 40px rgba(255, 107, 53, 0.4)',
                            duration: 0.3
                        });
                    },
                    onDrag: function() {
             
                        gsap.set(icon, { zIndex: 1000 });
           
                        gsap.to(icon, {
                            rotation: this.deltaX * 0.1,
                            duration: 0.1
                        });
                    },
                    onDragEnd: function() {
                        gsap.to(icon, {
                            scale: 1,
                            background: 'rgba(255, 255, 255, 0.08)',
                            color: 'rgba(255, 255, 255, 0.6)',
                            duration: 0.3,
                            zIndex: 1,
                            rotation: 0,
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                            cursor: 'grab'
                        });
                        
        
                        gsap.to(icon, {
                            y: -15,
                            duration: 2 + Math.random() * 2,
                            ease: "power1.inOut",
                            repeat: -1,
                            yoyo: true
                        });
                    }
                });
            });
        }

        // Parallax
        ScrollTrigger.create({
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                gsap.set(iconsRef.current, {
                    y: self.progress * -30
                });
            }
        });

    }, []);

    return (
        <>
        <div style={styles.pageWrapper}> 
        <section ref={bannerRef} style={styles.bannerSection}>
            {/* Floating icons*/}
            <div ref={iconsRef} className="floating-icons-container" style={styles.floatingIcons}>
                <div style={styles.icon}>JS</div>
                <div style={styles.icon}>TS</div>
                <div style={styles.icon}>PY</div>
                <div style={styles.icon}>C#</div>
                <div style={styles.icon}>GO</div>
                <div style={styles.icon}>RB</div>
                <div style={styles.icon}>C++</div>
                <div style={styles.icon}>RS</div>
                <div style={styles.icon}>SW</div>
                <div style={styles.icon}>KT</div>
                <div style={styles.icon}>PHP</div>
                <div style={styles.icon}>SQL</div>
                <div style={styles.icon}>SC</div>
                <div style={styles.icon}>LU</div>
            </div>

            {/* Main content */}

            <div style={styles.contentContainer}>
                <h1 ref={titleRef} style={styles.title}>
                    <span style={styles.titleHighlight}>Melhore suas habilidades</span><br />
                    através de desafios.
                </h1>
                <p ref={descriptionRef} style={styles.description}>
                    Pratique programação com desafios reais de Big Techs.
                </p>
                <Link ref={buttonRef} to="/register" style={styles.button}>
                    Comece agora!
                </Link>
            </div>
        </section>
            {/* Content */}
        <section style={styles.contentSection}>
            <div style={styles.cardContainer}>
                <h2 style={styles.titleMainContent}>Aprimore sua técnica</h2>
                <div style={styles.sideByside}>
                    <div style={styles.textColumn}>
                        <p style={styles.description}>
                            Aqui você encontrará uma variedade de desafios reais de empresas no mercado de trabalho, permitindo que você pratique, se prepare e melhore suas habilidades de programação.
                        </p>               
                        <Link to="/register" style={styles.button}>Criar Conta</Link>
                    </div>
                <div style={styles.imageColumn}>
                <img src={imagetest} alt="Imagem de exemplo" style={styles.image1} />
                </div>
                </div>
            </div>
        </section>
        <section style={styles.contentCardsSection}>
            <div style={styles.leftCardContainer}>
                <h2 style={styles.titleMainContent}>Receba Feedbacks</h2>
                        <p style={styles.description}>Resolva os desafios, faça upload do seu repositório e receba avaliações do que foi desenvolvido.</p>         
                    <div style={styles.imageContainer}>
                        <img src={imagetest2} alt="Imagem de exemplo2" style={styles.image2}></img>
                    </div>
            </div>
            <div style={styles.leftCardContainer}>
                <h2 style={styles.titleMainContent}>teste</h2>
                        <p style={styles.description}>Resolva os desafios, faça upload do seu repositório e receba avaliações do que foi desenvolvido.</p>         
                    <div style={styles.imageContainer}>
                        <img src={imagetest2} alt="Imagem de exemplo2" style={styles.image2}></img>
                    </div>
            </div>
        </section>
        <section style={styles.contentSection}>
            <div style={styles.cardContainer}>
                <div style={styles.topicsContainer}>
                    <div style={styles.topicItem}>
                        <h2 style={styles.topicsMainContent}>Feedbacks</h2>
                        <p style={styles.topics}>Receba feedbacks do seu código.</p>
                    </div>
                    <div style={styles.topicItem}>
                        <h2 style={styles.topicsMainContent}>Desafio</h2>
                        <p style={styles.topics}>Um desafio novo toda semana.</p>
                    </div>
                   <div style={styles.topicItem}>
                        <h2 style={styles.topicsMainContent}>Comunidade</h2>
                        <p style={styles.topics}>Crie uma comunidade e compartilhe ideias.</p>
                    </div>
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
        backgroundColor: '#0d1117', 
        backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(255, 107, 53, 0.15) 0%, transparent 40%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        // backgroundSize: '100% 100%, 40px 40px, 40px 40px', 
        // color: '#ffffff',
    },
        bannerSection: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px'
    },

    contentSection: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    container: {
        position: 'relative',
        minHeight: '100vh',
        background: '#0d1117',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '20px'
    },

    floatingIcons: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
    },

    icon: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '12px',
        fontWeight: 'bold',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'grab',
        pointerEvents: 'auto',
        userSelect: 'none'
    },

    contentContainer: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '800px',
        padding: '40px 20px'
    },

    title: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 'bold',
        marginBottom: '24px',
        lineHeight: '1.2',
        color: '#ffffff'
    },

    titleHighlight: {
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },

    // Main content
       titleMainContent: {
        fontSize: '35px',
        marginBottom: '24px',
        lineHeight: '1.2',
        color: '#ffffff'
    },

    description: {
        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: '40px',
        lineHeight: '1.6',
        maxWidth: '600px',
      
    },

    button: {
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

    gradientOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
    },

    // Card container
    cardContainer: {
            textAlign: 'left',
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.5), rgba(247, 147, 30, 0.5))',
            padding: '80px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '1300px',
    },

    contentCardsSection:{

        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        justifyContent: 'center',
        padding: '20px'

    },

    leftCardContainer: {
            textAlign: 'left',
            background: 'rgba(67, 67, 67, 0.3)',
            padding: '80px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '625px',
            
    },
    rightCardContainer: {
            textAlign: 'left',
            background: 'rgba(67, 67, 67, 0.3)',
            padding: '80px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '625px',
    },
    sideByside:{
        display: 'flex',
        alignItems: 'center', 
        gap: '40px',
    },

    imageColumn: {
    flex: 1, 
    display: 'flex',
    justifyContent: 'center', 
    
    alignItems: 'center',

    },
    textColumn:{
        flex: 1,
    },
    lefTextColumn:{
        flex: 1,
    },
    imageContainer:{
        display: 'flex',
        justifyContent:'flex-start',
        width: '100%',
    },

    image1:{
        height: 'auto', 
        borderRadius: '10px', 
        marginBottom: '20px',
        width: '50%',
        maxWidth: '300px',
    },

    topicsContainer:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0',

    },

    topicItem: {
        textAlign: 'center',
    },

    topics: {
        fontSize: '16px',
        color: 'rgba(255, 255, 255)',
        marginTop: '10px',
    },

    topicsMainContent: {
        fontSize: '35px',
        marginBottom: '24px',
        lineHeight: '1.2',
        color: '#ffffff',
    },

    image2:{
        height: 'auto', 
        borderRadius: '10px', 
        marginBottom: '20px',
        width: '100%',
        maxWidth: '300px',
    },



};

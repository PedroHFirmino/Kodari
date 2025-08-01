import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

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
        <div ref={bannerRef} style={styles.container}>
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

            {/* Background gradient */}
            <div style={styles.gradientOverlay}></div>
        </div>
    );
}

export default Home;
/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
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

    description: {
        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: '40px',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 40px auto'
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
        cursor: 'pointer'
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
    }
};

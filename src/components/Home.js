import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';
import gsap from "gsap";

const Home = () => {
    const bannerRef = useRef(null);

    useEffect(() => {
        if (bannerRef.current) {
            gsap.fromTo(bannerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
        }
    }, []);

    return (
        <div style={styles.bodyContainer}>
            <img ref={bannerRef} src={banner} alt="Banner" style={styles.bannerImage} />
            <div style={styles.contentContainer}>
                <h1 style={styles.title}>Bem-vindo ao Kodari</h1>
                <p style={styles.description}>Sua plataforma de aprendizado de programação.</p>
                <Link to="/register" style={styles.button}>Comece agora</Link>
            </div>
        </div>
    );
}

export default Home;

/** @type {{ [key: string]: React.CSSProperties }} */
const styles = {

bodyContainer: {},

bannerImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
},
title: {
    textAlign: 'center',
    fontSize: '2.5em', 
},

}
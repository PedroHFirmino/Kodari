import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const videoUrl = "https://www.pexels.com/pt-br/download/video/3130182/";
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
    const sectionRef = useRef(null);
    const videoContainerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: true,
                    pin: true,
                },
            });

            timeline.fromTo(videoContainerRef.current,
                { scale: 0.7, borderRadius: '30px' },
                { scale: 1, borderRadius: '0px', duration: 1 },
            );

            timeline.to(textRef.current,
                { autoAlpha: 0, duration: 0.4 },
                ">0.6"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
  
        <section ref={sectionRef} style={styles.heroContainer}>
            <div ref={videoContainerRef} style={styles.videoContainer}>
                <h1 ref={textRef} style={styles.title}>START YOUR</h1>
                {/* <p ref={descriptionRef} style={styles.heroSubtitle}>
                    Discover the Kodari Line Up
                </p> */}
                <video
                    style={styles.video}
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </section>
    );
};

export default Video;


const styles = {
    heroContainer: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: '#0d1117',
    },
    videoContainer: {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        fontWeight: 'bold',
        zIndex: 2,
        position: 'relative', 
        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
    },
};
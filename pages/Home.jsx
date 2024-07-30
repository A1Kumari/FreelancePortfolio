import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Heroimg from "../public/assests/heroimg.jpg";
import Navbar from '../components/Navbar';
import styles from "../styles/HomePage.module.css";
import Image from 'next/image'

export default function HomePage() {
  const containerRef = useRef(null);
  const [isContentVisible, setContentVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const tiltX = ((offsetY - clientHeight / 2) / clientHeight) * 15;
    const tiltY = ((offsetX - clientWidth / 2) / clientWidth) * -15;

    containerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    containerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const handleArrowClick = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <>
      <Head>
        <title>HireSync</title>
      </Head>
      <div className={styles.container} ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Navbar />
        
        <div className={styles.blueSection}>
          <div className={styles.introContent}>
            <h1 className={styles.coolHeading}>Hire me for <span className={styles.highlight}>Freelancing</span></h1>
            <p className={styles.introText}>Explore our amazing features and services.</p>
            <div className={styles.imagesSection}>
            <Image src={Heroimg} width={500} height={500} alt="Picture of the author"/>
            </div>
            <button className={styles.arrowButton} onClick={handleArrowClick}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10H18L12 16Z" fill="#fff"/>
              </svg>
            </button>
          </div>
        </div>
        {isContentVisible && (
          <motion.div
            className={styles.revealContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
          >
            
            <h2>Services offered:</h2>
            <ul>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
              <li>Full Stack Websites</li>
              <li>CRUD Operations</li>
              <li>Database Management</li>
              <li>Debugging</li>
            </ul>
            
          </motion.div>
        )}
      </div>
    </>
  );
}

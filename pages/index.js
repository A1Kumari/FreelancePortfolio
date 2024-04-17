import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from './post/HomePage';
import Count from './post/Count';
import Pricing from './post/Pricing';
import Project from './post/Project';
import Contact from './post/Contact';
import About from './post/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePage/>
      <About/>
      {/* <Pricing/> */}
      <Project/>
      <Contact/>
    </div>
  );
}

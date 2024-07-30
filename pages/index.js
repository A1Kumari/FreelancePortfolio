import Head from 'next/head';

import styles from '../styles/Home.module.css';
import HomePage from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Pricing from './Pricing';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    <HomePage/>
    <About/>
    <Project/>
    <Pricing/>
    <Contact/>
      </div>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { BsStars } from "react-icons/bs";
import team from "../../public/image/team.jpg"
import Count from './Count';
import styles from "../../styles/About.module.css";

export default function About() {
    return (
      <>
        <Head>
          <title>About Page</title>
        </Head> 
        <div className={styles.lineContainer}>
  <hr className={styles.line}/>
  <div className={styles.content}>
    <span>Design</span>
    <span className={styles.dot}>.</span>
    <span>Develop</span>
    <span className={styles.dot}>.</span>
    <span>Optimization</span>
    <span className={styles.dot}>.</span>
    <span>Branding</span>
    <span className={styles.dot}>.</span>
    <span>Copywriting</span>
  </div>
  <hr className={styles.line}/>
</div>

      <section className={styles.about}>
      
        <div className={styles.header}>
        <BsStars />
        <button className={styles.UniversalBtn}>Our</button>
        <button className={styles.UniversalBtn}>Vision</button>
        </div>
        <div className={styles.oneLine}>
        <h1 className={styles.horText}>IT'S DIFFERENT WORKING WITH US</h1>
        <Image src={team} className={styles.teamImg}></Image> 
        </div>
        
        <div className={styles.oneLine}>
        <div className={styles.smallContainer}>
            <p>Elevating Ideas, Transforming Experiences: Designing tomorrows imagination today</p>
            <button className={styles.UniversalBtn} style={{ color: "white" }}>Get in Touch</button>
            icon
        </div>
      
        </div>
        <h3>Putting our clients success first</h3>
        <p>We handle the base case when the depth is 1 by creating a new root node and making the original tree its left subtree.
We perform a BFS traversal to reach the nodes at depth depth - 1.
While traversing, we create new nodes with the given value val as their values and adjust the pointers accordingly to add them to the tree.</p>
        
<div className="container">
  <div className="content">
    <p>01 building trust para</p>
    <hr />
    <p>02 building trust para</p>
    <hr />
    <p>03 building trust para</p>
  </div>
</div>


      </section>
      </>
    );
  }


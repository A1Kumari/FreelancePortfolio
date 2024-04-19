import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import team from "../../public/image/team.jpg"
import styles from '../../styles/HomePage.module.css';
import Count from './Count';

export default function HomePage() {
    return (
      <>
        <Head>
          <title>Home Page</title>
        </Head> 
        <section classname={styles.homeSection}>
        <h1 className={styles.logo}>Claw</h1>
            <div className={styles.oneLine}>
            
              <div className={styles.greenContainer}>
               <div className={styles.oneLine}>
         
              <h1 className={`${styles.verticalText} ${styles.heading}`}>WE</h1>
               <h1 className={`${styles.verticalText} ${styles.heading}`}>DESIGN</h1>
               <h1 className={`${styles.verticalText} ${styles.heading}`}>FOR YOU</h1>
         
               

            </div>
                <p>Discover amazing features and services that we offer!</p>
                <div className={styles.oneLine}>
                <div className={styles.smallContainer}>$1850+</div>
                <div className={styles.smallContainer}>$12+</div>
                <div className={styles.smallContainer}>$400+</div>
                <div className={styles.smallContainer}>$425+</div>
                </div>
                
               
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.box}>
              <Image src={team} className={styles.teamImg}></Image>  
              <button className={styles.menuBtn}><button className={styles.UniversalBtn}>Menu</button></button>
              </div>
            </div>
              
            </div>
          
               
               {/* <div classname={styles.container}>
                
               </div>
               <button classname={styles.ctaButton}>Order a Project</button>
               <>icon</>
               <Count/>
               Have a new project idea? WE are available for new Projects */}
               </section>
      </>
    );
  }


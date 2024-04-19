import Head from 'next/head';
import Link from 'next/link';
import styles from "../../styles/Contact.module.css"

export default function Contact() {
    return (
      <>
        <Head>
        <title>Contact Me</title>
      </Head>
     
      <div className={styles.contactInfo}>
        <h1>Contact Me</h1>
        <div className={styles.contactOptions}>
          <div className={styles.contactOption}>
            <h2>Instagram</h2>
            <p>@your_instagram_handle</p>
          </div>
          <div className={styles.contactOption}>
            <h2>Email</h2>
            <p>your_email@example.com</p>
          </div>
          <div className={styles.contactOption}>
            <h2>Website</h2>
            <p>www.yourwebsite.com</p>
          </div>
          <div className={styles.contactOption}>
            <h2>Direct Contact</h2>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className={styles.contactSection}>
        <h1>LET'S BUILD AND SCALE IT!</h1>
      </div>
      </>
    );
  }


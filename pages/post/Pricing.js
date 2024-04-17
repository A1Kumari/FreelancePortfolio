import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/link';
import styles from "../../styles/Pricing.module.css"

export default function Pricing() {
    return (
      <>
       <Head>
        <title>Pricing</title>
      </Head>
      <hr/>
      Design . Develop . Optimization . Branding .  Copywriting
      <hr/>
      <section className={styles.about}>
      
        <div className={styles.header}>
        icon 
        <button>Our</button>
        <button>Vision</button>
        </div>
        It's Different Working With US
        <div>
            <p>Elevating Ideas, Transforming Experiences: Designing tomorrows imagination today</p>
            <button>Get in Touch</button>
            icon
        </div>
        <div>
        <Image></Image>
        <h3>Putting our clients success first</h3>
        <p>loreum ispum</p>
        </div>
        
        <div>
            01 building trust <p></p>
            02 building trust <p></p>
            03 building trust <p></p>
        </div>

      </section>

      {/* <section className={styles.service}>
      
      <section/> */}
      <div className={styles.pricingSection}>
        <h1>Pricing</h1>
        <div className={styles.pricingPlans}>
          <div className={styles.pricingPlan}>
            <h2>Basic Plan</h2>
            <p>Perfect for small projects</p>
            <p>$10/month</p>
            <Link href="/contact">
             Get Started
            </Link>
          </div>
          <div className={styles.pricingPlan}>
            <h2>Standard Plan</h2>
            <p>Great for growing businesses</p>
            <p>$25/month</p>
            <Link href="/contact">
              Get Started
            </Link>
          </div>
          <div className={styles.pricingPlan}>
            <h2>Premium Plan</h2>
            <p>For large-scale enterprises</p>
            <p>$50/month</p>
            <Link href="/contact">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr/>
      </>
    );
  }


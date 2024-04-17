"use client"; 
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from "react";
import styles from "../../styles/Count.module.css"

export default function Count() {
    const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulating fetching visitor count from a backend or storage
    // Here, we just increment the count on initial load
    setVisitorCount(prevCount => prevCount + 1);
  }, []);

    return (
      <>
        <Head>
        <title>Visitor Count</title>
      </Head>
      <div className={styles.visitorCountSection}>
        <h1>Visitor Count</h1>
        <p>{visitorCount} {visitorCount === 1 ? 'person has' : 'people have'} visited this page.</p>
      </div>
      </>
    );
  }


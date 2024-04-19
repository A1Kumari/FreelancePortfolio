import Head from 'next/head';
import Image from 'next/image';
import styles from "../../styles/Project.module.css";

export default function Project() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={styles.projectSection}>
        <button className={styles.UniversalBtn}>WHAT</button>
        <button className={styles.UniversalBtn}>WE</button>
        <button className={styles.UniversalBtn}>DO</button>
        <h1 className={styles.horText}>WE PROVIDE A NUMBER OF CREATIVE SERVICES</h1>

        <div className="container">
          <div className="content">
            <div  className={`${styles.project} ${styles.oneLine}`}>
              <div className="projectInfo">
                <p>01. UI/UX DESIGN</p>
                <p>UI/UX design para</p>
                <div className="viewDesign">View Design</div>
              </div>
              <div className="projectImage">
                <Image src="/project1.jpg" width={500} height={300} className={styles.img}/>
              </div>
            </div>

            <hr/>
            <div  className={`${styles.project} ${styles.oneLine}`}>
              <div className="projectInfo">
                <p>01. UI/UX DESIGN</p>
                <p>UI/UX design para</p>
                <div className="viewDesign">View Design</div>
              </div>
              <div className="projectImage">
                <Image src="/project1.jpg" width={500} height={300} />
              </div>
            </div>
            <hr/>
            {/* Repeat similar project elements as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

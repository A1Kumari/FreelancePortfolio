import Head from 'next/head';
import Link from 'next/link';
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
        <h1 className='horText'>WE PROVIDE A NUMBER OF CREATIVE SERVICES</h1>

        <div className="container">
  <div className="content">
    <div className="project">
      <div className="projectInfo">
        <p>01. UI/UX DESIGN</p>
        <p>UI/UX design para</p>
        <div className="viewDesign">View Design</div>
      </div>
      <div className="project-image">
        <Image/>
      </div>
    </div>
    <hr/>
    <div className="project">
      <div className="projectInfo">
        <p>01. UI/UX DESIGN</p>
        <p>UI/UX design para</p>
        <div className="viewDesign">View Design</div>
      </div>
      <div className="project-image">
        <Image/>
      </div>
    </div>
    <hr/>
    <div className="project">
      <div className="projectInfo">
        <p>01. UI/UX DESIGN</p>
        <p>UI/UX design para</p>
        <div className="viewDesign">View Design</div>
      </div>
      <div className="project-image">
        <Image/>
      </div>
    </div>
  </div>
</div>
<hr/>
    <div className="project">
      <div className="projectInfo">
        <p>01. UI/UX DESIGN</p>
        <p>UI/UX design para</p>
        <div className="viewDesign">View Design</div>
      </div>
      <div className="project-image">
        <Image/>
      </div>
    </div>
    <hr/>
    <div className="project">
      <div className="projectInfo">
        <p>01. UI/UX DESIGN</p>
        <p>UI/UX design para</p>
        <div className="viewDesign">View Design</div>
      </div>
      <div className="project-image">
        <Image/>
      </div>
    </div>
     
      </div>
      </>
    );
  }


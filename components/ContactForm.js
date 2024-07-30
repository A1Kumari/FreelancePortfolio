import React, { useRef } from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import styles from './styles/ContactForm.module.css';

export default function ContactForm() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Attempting to send email with the following details:');
    console.log('Service ID:', 'service_3mybwgh');
    console.log('Template ID:', 'template_5igzheo');
    console.log('Form Reference:', formRef.current);
    console.log('Public Key:', 'lyyhzjro2QMLtmBC0');

    emailjs.sendForm(
      'service_3mybwgh',  // Your Service ID
      'template_5igzheo', // Your Template ID
      formRef.current,    // The form reference
      'lyyhzjro2QMLtmBC0' // Your Public Key
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Your message has been sent successfully!');
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message, please try again later.');
      }
    );
  };

  return (
    <>
      <Head>
        <title>HireSync - Contact Us</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p>Feel free to reach out to us via the form on the right or through the following contact information:</p>
          <p>Email: <a href="mailto:contact@hiresync.com">contact@hiresync.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          <p>Address: 123 Freelance St, Developer City</p>
        </div>
        <div className={styles.glassContainer}>
          <h2 className={styles.formHeading}>Contact Us</h2>
          <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

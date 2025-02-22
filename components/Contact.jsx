import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Contact.module.scss'

const Contact = () => {
  const addressImageWidth = 1200 * 0.4;
  const addressImageHeight = 906 * 0.4;

  const now = new Date();

  return (
    <div className={styles.root}>
      <div className={styles.infoContainer} id="contact">
        <div className={styles.infoContainerInner}>
          <h3 className={styles.highlightTitle}>About to rock?</h3>
          <div>
            Informaţii şi înscrieri:
            <ul>
              <li>Luni-Vineri:  <strong>14:30 - 20:30</strong></li>
              <li>Sambata:  <strong>11:30 - 16:30</strong></li>
            </ul>
            <ul>
              <li>Sediul RockSchool:  <strong>031.425.93.59</strong></li>
              <li>Secretariat:  <strong>0723.43.11.13</strong></li>
            </ul>
          </div>
          <p>În afara orelor de program trimite email:
            <p><strong><Link href="mailto: contact+rs@rockschool.ro" passHref>
            contact@rockschool.ro</Link></strong></p>
          </p>
          <h3 className={styles.highlightTitle}>
            We expect you&#8230; Let&#8217;s rock!
          </h3>
        </div>
      </div>
      <div className={styles.mapContainer} id="adresa">
        <a className={styles.link} href="https://goo.gl/maps/ESrwVfy9xsPMoXmc7" target="_blank" rel="noreferrer">
          <h3 className={styles.highlightTitle}>
            Strada Vasile Lascar, nr. 183, Bucuresti
          </h3>
        </a>
        <a className={styles.link} href="https://goo.gl/maps/ESrwVfy9xsPMoXmc7" target="_blank" rel="noreferrer">
          <img className={styles.image}  alt="Vasile Lascar, nr. 183" src="https://rockschool-ro.imgix.net/9.Vasile-Lascar-183.png"
                 width={addressImageWidth} height={addressImageHeight} />
        </a>
      </div>
      <div className={styles.mapContainer} id="copyright">
        <p>RockSchool.RO © {now.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Contact;

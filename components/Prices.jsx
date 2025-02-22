import React from 'react'
import Image from 'next/image'

import styles from './Prices.module.scss'

const Prices = () => {
  const imagesWidth = 118 * 0.8;
  const imagesHeight = 64 * 0.8;

  return (
    <div className={styles.root} id="preturi">
      <div className={styles.innerContainer}>
        <h3 className={styles.highlightTitle}>Preţuri valabile începând din 1 Martie 2024:</h3>
        <p>
          O singură lecţie: <strong>110 RON / 60 min</strong>.
          Oferim preţuri reduse prin 3 pachete de şedinţe săptămânale cu durata de o ora:
        </p>
        <div className={styles.pricesContainer}>
          <div className={styles.priceItem}>
            <img alt="RockSchool.RO" src="https://rockschool-ro.imgix.net/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Basic</h4>
              <h5>4 ședinṭe (ore)</h5>
              <p>report: maxim 1</p>
              <div className={styles.price}>400 RON/lunǎ</div>
            </div>
          </div>
          <div className={styles.priceItem}>
            <img alt="RockSchool.RO" src="https://rockschool-ro.imgix.net/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Acid</h4>
              <h5>8 ședinṭe (ore)</h5>
              <p>report: maxim 2</p>
              <div className={styles.price}>720 RON/lunǎ</div>
            </div>
          </div>
          <div className={styles.priceItem}>
            <img alt="RockSchool.RO" src="https://rockschool-ro.imgix.net/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Benzen</h4>
              <h5>12 ședinṭe (ore)</h5>
              <p>report: maxim 3</p>
              <div className={styles.price}>960 RON/lunǎ</div>
            </div>
          </div>
        </div>
        <p>Recuperarea lecṭiilor se va putea face, cu condiṭia anunṭǎrii absenṭei cu cel puṭin
          o zi ȋnainte pâna la ora 17.00. Lectia se va plati, dar, in functie de disponibilitatea profesorilor,
          va putea fi recuperata in interval de o luna, la orice instrument:</p>
        <ul>
          <li>Pachetul &#8220;Basic&#8221; – poate fi recuperatǎ 1 lecṭie</li>
          <li>Pachetul &#8220;Acid&#8221; – pot fi recuperate 2 lecṭii</li>
          <li>Pachetul &#8220;Benzen&#8221; – pot fi recuperate 3 lecṭii</li>
        </ul>
        <p>Pentru pachetele de familie, numărul total de lecţii ce pot fi reportate păstrează regula de mai sus.
          Absenţele neanunţate care depăşesc numărul de lecţii ce pot fi reportate, vor fi considerate
          lecţii efectuate, în consecinţă, trebuiesc plătite. Plata integrală a pachetului se face la prima
          lecţie din pachet. Lectia dureaza 60 de minute.</p>
      </div>
    </div>
  );
};

export default Prices;

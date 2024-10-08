import styles from "./ourCrew.module.css";
const OurCrew = () => {
  return (
    <div>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div className={styles.imageContainer}>
        <div className={styles.imageItem}>
          <img src="/crew/image-anousheh-ansari.png"></img>
          <p className={styles.imageDesc}>
            Captain Sarah Vega: A former NASA astronaut with over 15 years of
            experience, Captain Vega leads our missions with unparalleled
            expertise and a passion for space exploration.
          </p>
        </div>
        <div className={styles.imageItem}>
          <img src="/crew/image-douglas-hurley.png"></img>
          <p className={styles.imageDesc}>
            Dr. Leo Redding: Our chief astrophysicist, Dr. Redding, is a
            renowned scientist who has contributed to major space discoveries.
            He ensures that every journey is as educational as it is
            exhilarating.
          </p>
        </div>
        <div className={styles.imageItem}>
          <img src="/crew/image-mark-shuttleworth.png"></img>
          <p className={styles.imageDesc}>
            Chief Engineer Hana Lee: With her extensive background in aerospace
            engineering, Hana Lee is responsible for the state-of-the-art
            technology that powers our spacecraft. Her innovation ensures that
            our travelers are always in safe hands.
          </p>
        </div>
        <div className={styles.imageItem}>
          <img src="/crew/image-victor-glover.png"></img>
          <p className={styles.imageDesc}>
            Mission Specialist Alex Santos: As a mission specialist, Alex’s job
            is to ensure that every aspect of the journey runs smoothly. With a
            background in both science and adventure tourism, Alex is the
            perfect guide for our space travelers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCrew;

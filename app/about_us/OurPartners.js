import styles from "./ourPartners.module.css";
const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className={styles.logoContainer}>
        <span className={styles.logoItem}>
          <img
            src="/business_partners/alphabet-logo.png"
            alt="alphabet logo"
          ></img>
        </span>
        <span className={styles.logoItem}>
          <img src="/business_partners/amazon_logo.png" alt="amazon logo"></img>
        </span>
        <span className={styles.logoItem}>
          <img src="/business_partners/CBC_Logo_White.png" alt="CBC logo"></img>
        </span>
        <span className={styles.logoItem}>
          <img
            src="/business_partners/Microsoft-Logo-white.png"
            alt="microsoft logo"
          ></img>
        </span>
        <span className={styles.logoItem}>
          <img src="/business_partners/nyu-logo.png" alt="nyu logo"></img>
        </span>
        <span className={styles.logoItem}>
          <img
            src="/business_partners/QueensLogo_white.png"
            alt="queens logo"
          ></img>
        </span>
        <span className={styles.logoItem}>
          <img
            src="/business_partners/samsung-logo.png"
            alt="samsung logo"
          ></img>
        </span>
        <span className={styles.logoItem}>
          <img src="/business_partners/sodexo-logo.png" alt="sodexo logo"></img>
        </span>
      </div>
    </div>
  );
};

export default OurPartners;

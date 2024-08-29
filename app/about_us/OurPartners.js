import styles from "./ourPartners.module.css";
const OurPartners = () => {
  return (
    <div>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className={styles.logoContainer}>
        <img
          className={styles.logoItem}
          src="/business_partners/alphabet-logo.png"
          alt="alphabet logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/amazon_logo.png"
          alt="amazon logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/CBC_Logo_White.png"
          alt="CBC logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/Microsoft-Logo-white.png"
          alt="microsoft logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/nyu-logo.png"
          alt="nyu logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/QueensLogo_white.png"
          alt="queens logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/samsung-logo.png"
          alt="samsung logo"
        ></img>

        <img
          className={styles.logoItem}
          src="/business_partners/sodexo-logo.png"
          alt="sodexo logo"
        ></img>
      </div>
    </div>
  );
};

export default OurPartners;

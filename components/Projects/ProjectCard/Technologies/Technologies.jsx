import styles from "./Technologies.module.scss";

function Technologies({ technology }) {
  return (
    <div className={styles.technologies}>
      <p className={styles.technologies__text}>{technology}</p>
    </div>
  );
}

export default Technologies;

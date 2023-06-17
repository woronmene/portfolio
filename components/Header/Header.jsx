import styles from "./Header.module.scss";
import { motion } from "framer-motion";

const headerVariant = {
  rest: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.01, 1, 0.89, 0.96],
      duration: 0.8,
      delay: 1.3,
    },
  },
};

function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__content} global__container`}>
        {/* <div className="header__content global__container"> */}
        <div className={styles.header__content__text}>
          <motion.h1
            className="global__mainText"
            variants={headerVariant}
            initial="rest"
            animate="visible"
          >
            {"I'm Woron, your trusted Frontend Web Dev Pro! ✨👋"}{" "}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Header;

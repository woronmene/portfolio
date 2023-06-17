// import { Link } from "react-router-dom";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      className={styles.navbar}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.65, 0, 0.98],
        duration: 0.7,
      }}
    >
      <div className="global__wrapper">
        {/* navbar left */}

        <div className={styles.navbar__links}>
          {/* <div className="navbar__links"> */}
          <p>
            <Link href="/" className={styles.navbar__link}>
              Home
            </Link>
          </p>
          <p>
            <Link href="/about" className={styles.navbar__link}>
              About
            </Link>
          </p>
        </div>
        <p className={styles.logo}>woron.dev</p>

        {/* navbar right */}

        <div className={styles.navbar__themes}>
          {/* <div className="navbar__theme global__yellow"></div>
          <div className="navbar__theme global__green"></div>
          <div className="navbar__theme global__pink"></div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;

import {
  AiFillGithub,
  // AiFillGitlab,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <motion.div
      className={styles.sidebar}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        ease: [0.6, 0.65, 0, 0.98],
        duration: 1,
        delay: 0.5,
      }}
    >
      <div className={styles.sidebar__socialIcons}>
        {/* <div className="sidebar__social-icons"> */}
        <a href="https://github.com/woronmene" target="_blank">
          <AiFillGithub size="22" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/woron-mene-509a311a8/"
          target="_blank"
        >
          <AiFillLinkedin size="22" />
        </a>
        <a href="mailto:meneworon4@gmail.com" target="_blank">
          <AiFillMail size="22" />
        </a>
        {/* <AiFillMail size="22" /> */}
      </div>
    </motion.div>
  );
}

export default Sidebar;

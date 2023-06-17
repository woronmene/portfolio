import styles from "./Footer.module.scss";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="global__wrapper">
        {/* footer left */}
        <div className={styles.footer__resume}>
          <a
            className={styles.footer__resume__link}
            href="https://drive.google.com/file/d/11bIbVGIhp9dxPADz8CVyf__uc9AfeEYB/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
        </div>

        {/* footer center */}
        <div className={styles.footer__credits}>
          <p>Made by me 🌟</p>
        </div>

        {/* footer right */}
        <div className={styles.footer__socialIcons}>
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
      </div>
    </div>
  );
}

export default Footer;

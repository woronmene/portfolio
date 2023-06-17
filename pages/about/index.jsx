import styles from "./About.module.scss";
import { motion } from "framer-motion";
function About() {
  const parentVariant = {
    rest: {
      opacity: 1,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        // ease: [.01,1,.89,.96],
        // duration: .8,
        // // delay: 1.3,
        // staggerChildren: 0.5
      },
    },
  };

  const childrenVariant = {
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

  return (
    <div className={styles.about}>
      <div className={`${styles.about__content} global__container`}>
        {/* <div className="about__content global__container"> */}
        <h1 className="global__heading">Bio</h1>
        <motion.div
          className={styles.aboutPar}
          //   className={"about-par"}
          variants={parentVariant}
          initial="rest"
          animate="visible"
        >
          <motion.h2 variants={childrenVariant}>{"Hi 👋 I'm Woron"}</motion.h2>
          <motion.p variants={childrenVariant}>
            🎨 With over 5 years of dedicated experience, I have a genuine
            passion for creating beautiful user interfaces that leave a lasting
            impact. 👨‍💻 I obsess over the tiniest details, ensuring that every
            pixel is perfectly placed, resulting in visually captivating
            websites. 🖥️💫
          </motion.p>
          <motion.p variants={childrenVariant}>
            {`  🚀 I'm armed with a deep well of technical expertise, allowing me to
            bring your web visions to life with seamless functionality and
            exceptional user experiences. From smooth navigation to responsive
            designs, I strive to create interfaces that effortlessly engage and
            delight your audience. ✨🌐`}
          </motion.p>
          <motion.p variants={childrenVariant}>
            {`      💡 I'm always on the lookout for the latest industry trends and
            cutting-edge technologies. By blending creativity and innovation, I
            ensure that your website stands out from the crowd. I'm here to make
            your online presence shine! 📚🚀`}
          </motion.p>
          <motion.p variants={childrenVariant}>
            {`     🌟 Ready to take your online presence to the next level? Get in touch with me today, and let's work together to bring your web dreams to life. The magic begins when we join forces! 🔥🌟`}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

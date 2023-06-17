import { useState } from "react";
import { motion } from "framer-motion";
import Technologies from "./Technologies/Technologies";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "./ProjectCard.module.scss";

// framermotion variants for the hover effect on card
const mainCardVariant = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

const cardContentVariant = {
  rest: {},
  hover: {
    height: "90%",
  },
};

function ProjectCard({ name, link, image, technologies, description, github }) {
  const [showCardContent, setShowCardContent] = useState(false);

  return (
    <div className={styles.projectCard}>
      <motion.div
        className={styles.projectCard__wrapper}
        variants={mainCardVariant}
        initial="rest"
        whileHover="hover"
        onClick={() => {
          setShowCardContent(!showCardContent);
        }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          className={`${styles.projectCard__content} ${
            showCardContent ? styles.projectCard__contentActive : ""
          }`}
          variants={cardContentVariant}
        >
          <h2 className={styles.projectCard__title}>{name}</h2>
          <p className={styles.projectCard__description}>{description}</p>
          <div className={styles.projectCard__technologies}>
            {technologies &&
              technologies.map((technology) => (
                <Technologies key={technology} technology={technology} />
              ))}
            {/* <Technologies technology="Next.js" />
            <Technologies technology="Tailwind Css" />
            <Technologies technology="Node.js" />
            <Technologies technology="Netlify" />
            <Technologies technology="React" /> */}
          </div>

          <div className={styles.projectCard__links}>
            {github !== "" && (
              <a className={styles.cardLink} href={github} target="_blank">
                <RiGithubLine size="22" />
              </a>
            )}
            <a className={styles.cardLink} href={link} target="_blank">
              <HiOutlineExternalLink size="22" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
// import React from "react";

// import styled from "styled-components";
// import { motion } from "framer-motion";

// const textMotion = {
//   rest: {
//     color: "grey",
//     x: 0,
//     transition: {
//       duration: 2,
//       type: "tween",
//       ease: "easeIn"
//     }
//   },
//   hover: {
//     color: "blue",
//     x: 30,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeOut"
//     }
//   }
// };

// const slashMotion = {
//   rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
//   hover: {
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeIn"
//     }
//   }
// };

// const HoverTest = () => {
//   return (
//     <Container initial="rest" whileHover="hover" animate="rest">
//       <SlashContainer variants={slashMotion}>
//         <svg width="1em" height="1em" viewBox="0 0 27 50">
//           <path
//             fill="#154FFF"
//             d="M21.177 0L0 50h5.818L26.995 0z"
//             fillRule="evenodd"
//           />
//         </svg>
//       </SlashContainer>
//       <motion.h1 variants={textMotion}>Hover me!</motion.h1>
//     </Container>
//   );
// };
// export default HoverTest;

// const Container = styled(motion.div)`
//   position: relative;
//   max-width: 200px;
//   cursor: pointer;
//   border: 1px solid red;
// `;

// const SlashContainer = styled(motion.div)`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   opacity: 0;

//   transform: translateY(-50%);

//   svg {
//     width: auto;
//     height: 50px;
//     object-fit: scale-down;
//   }
// `;

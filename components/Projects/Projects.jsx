import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { projects } from "@/constants";

function Projects({ title }) {
  return (
    <div className={styles.projects}>
      <div className={`${styles.projects__content} global__container`}>
        <h1 className="global__heading">{title}</h1>

        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
            technologies={project.technologies}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

import styles from "./ProjectList.module.css";
import Project from "../Project/Project";
import { projects } from "../../data.js";


const ProjectList = () => {
  return (
    <div id="project" className={styles.projectList} >
      <div className={styles.texts}>
        <h1 data-aos="zoom-in-up" className={styles.title}>
          Check out my latest work
        </h1>
        
        </div>

      <div className={styles.list}>
          {projects.map((project) => {
            return (
            
            <Project
              id={project.id}
              link={project.link}
              source={project.source}
              delay={project.delay}
              title={project.title}
              techno={project.techno}
              description={project.description}
            />
          )})}
      </div>
    
    </div>
  );
};

export default ProjectList;

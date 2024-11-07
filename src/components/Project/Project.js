import styles from "./Project.module.css";

const Project = ({  id,link, delay, title, techno, description,  source }) => {
  const isEven = id % 2 == 0

  return (
    <>
      <div
        data-aos-delay={delay}
        data-aos={`fade-${isEven ? 'left' : 'right'}`}
        className={styles.project} 
        style={{
          textAlign: isEven ? 'left': 'right',
          boxShadow: `${isEven ? '-2px' : '2px'} 2px 4px rgba(255, 255, 255, 0.5)`
        }}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.techno}  
        style={{
          justifyContent: isEven ? 'start': 'end',
        }}
        >

          {techno.map(tech => { return <h4 >{tech}</h4> })}
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.button} 
        style={{
          justifyContent: isEven ? 'start': 'end',
        }}
        >
          {link &&
          <button
           
            onClick={() => window.open(`${link}`, "_blank")}
            type="button"
          >
            See Live
          </button>}
          {source &&
          <button
           className={styles.source}
            onClick={() => window.open(`${source}`, "_blank")}
            type="button"
          >
            Source Code
          </button>}
        </div>
      </div>







    </>
  );
};

export default Project;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CIcon } from '@coreui/icons-react';
import { cibHtml5, cibCss3Shiled, cibJavascript, cibTypescript, cibReact, cibNextJs, cibVueJs, cibRedux, cibPython, cibPostgresql, cibMongodb, cibMysql, cibAmazonAws, cibDocker, cibKubernetes, cibGit, cibGitlab } from '@coreui/icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const iconsRef = useRef([]);

    const icons = [
        { icon: cibHtml5, name: 'HTML5' },
        { icon: cibCss3Shiled, name: 'CSS3' },
        { icon: cibJavascript, name: 'JavaScript' },
        { icon: cibTypescript, name: 'TypeScript' },
        { icon: cibReact, name: 'React' },
        { icon: cibNextJs, name: 'Next.js' },
        { icon: cibVueJs, name: 'Vue.js' },
        { icon: cibRedux, name: 'Redux' },
        { icon: faNode, name: 'Node.js' },
        { icon: cibPython, name: 'Python' },
        { icon: cibPostgresql, name: 'PostgreSQL' },
        { icon: cibMongodb, name: 'MongoDB' },
        { icon: cibMysql, name: 'MySQL' },
        { icon: cibAmazonAws, name: 'AWS' },
        { icon: cibDocker, name: 'Docker' },
        { icon: cibKubernetes, name: 'Kubernetes' },
        { icon: cibGit, name: 'Git' },
        { icon: cibGitlab, name: 'GitLab' }
    ];

    useEffect(() => {
        const gridPositions = [];
        const columns = 6;
        const iconSize = 90;
        const spacing = 80;
    
        // Calculate grid positions
        icons.forEach((_, i) => {
            const x = (i % columns) * (iconSize + spacing) - ((columns - 1) * (iconSize + spacing)) / 2; // Center horizontally
            const y = Math.floor(i / columns) * (iconSize + spacing) - (Math.floor(icons.length / columns) * (iconSize + spacing)) / 2; // Center vertically
            gridPositions.push({ x, y });
        });
    
        // Initial state: stack all icons at the center
        gsap.set(iconsRef.current, {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.5,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        });
    
        // Scatter icons on scroll
        const scatterIcons = () => {
            gsap.to(iconsRef.current, {
                duration: 2,
                x: (i) => gridPositions[i]?.x || 0,
                y: (i) => gridPositions[i]?.y || 0,
                opacity: 1,
                scale: 1,
                ease: 'elastic.out(1, 0.5)', // Floating effect
                stagger: 0.1, // Stagger the animation for each icon
            });
        };
    
        const resetIcons = () => {
            gsap.set(iconsRef.current, {
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0.5,
            });
        };
    
        // Use styles.container as the correct trigger
        ScrollTrigger.create({
            trigger: `.${styles.container}`, // Correct the trigger reference
            start: "top center",
            onEnter: scatterIcons,      // When scrolling down
            onEnterBack: scatterIcons,  // When scrolling back up
            onLeave: resetIcons,        // Reset the icons when leaving the viewport
            onLeaveBack: resetIcons,    // Reset the icons when scrolling back up past the trigger
        });
    }, [icons, styles.container]); // Add styles.container as a dependency
    

    return (
        <div id="skills" className={styles.skills}>
            <h1 className={styles.title}>Technologies I Thrive On</h1>
            <div className={styles.container}>

                {icons.map((item, index) => (
                    <div
                    key={index}
                    ref={el => iconsRef.current[index] = el}
                    className={styles.icon}
                    >
                        {index === 8 ? (
                            <FontAwesomeIcon icon={item.icon} style={{ fontSize: '4rem' }} />
                        ) : (
                            <CIcon icon={item.icon} size="xl" />
                        )}
                        <p style={{ marginTop: '5px', color: 'white', textAlign: 'center' }}>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

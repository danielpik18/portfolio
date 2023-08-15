import React from "react";
import styles from "./Project.module.scss";

const Project = ({ project }) => {
    const projectImage = require(`pages/Projects/img/${project.image_path}`);

    return (
        <a
            className={styles.projectItem}
            href={project.url}
            target="_blank"
            rel="noreferrer"
        >
            <div class={styles.projectItem__sides}>
                <div
                    className={styles.projectItem__image}
                    style={{
                        backgroundImage: `url(${projectImage})`,
                    }}
                />

                <div class={styles.projectItem__text}>
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>

                    <ul class={styles.projectItem_tech}>
                        {project.tech.map((tech) => (
                            <li>
                                {/*
                                <img
                                    src={
                                        require(`pages/Projects/img/${tech.icon_path}`)
                                            .default
                                    }
                                    alt=""
                                />*/}
                                {tech.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
    );
};

export default Project;

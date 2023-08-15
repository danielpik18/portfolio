import React from "react";
import styles from "./Projects.module.scss";
import Project from "components/Project/Project";

const Projects = () => {
    const projects = [
        {
            url: "https://neos-records.onrender.com/",
            image_path: "neos-records-thumbnail.png",
            title: "Neos Records",
            description: "Demo page for Neos Record's music label website",
            tech: [
                {
                    icon_path: "",
                    name: "React",
                },
                {
                    icon_path: "",
                    name: "NodeJS",
                },
                {
                    icon_path: "",
                    name: "ExpressJS",
                },
                {
                    icon_path: "",
                    name: "Mysql",
                },
            ],
        },
        {
            url: "https://askmethod.com/bucket-launch-0823",
            image_path: "bucket-thumbnail.png",
            title: "Bucket 2023 promo page",
            description: "Sales page for Bucket.io 2023 promotion",
            tech: [
                {
                    icon_path: "",
                    name: "PHP",
                },
                {
                    icon_path: "",
                    name: "Javascript",
                },
                {
                    icon_path: "",
                    name: "SASS",
                },
            ],
        },
        {
            url: "https://chat-rooms-app.onrender.com/",
            image_path: "chat-rooms-thumbnail.png",
            title: "Chatrooms",
            description:
                "A simple application using SocketIO in which you can join other people's 'chat rooms' or create your own.",
            tech: [
                {
                    icon_path: "",
                    name: "SocketIO",
                },
                {
                    icon_path: "",
                    name: "Javascript",
                },
            ],
        },
    ];

    const content = projects.map((project, index) => (
        <Project project={project} key={index} />
    ));

    return (
        <div className={styles.projects}>
            <div className="container">
                <h1 className="title">
                    These are some projects I've worked on.
                </h1>
                <div className="separator"></div>

                <div className={styles.projects__list}>{content}</div>
            </div>
        </div>
    );
};

export default Projects;

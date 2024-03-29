import React from "react";
import styles from "./Projects.module.scss";
import Project from "components/Project/Project";

const Projects = () => {
    const projects = [
        {
            url: "https://piano-wizard.vercel.app/",
            githubUrl: "https://github.com/danielpik18/piano-wizard",
            image_path: "piano-wizard-thumbnail.png",
            title: "Piano Wizard",
            description:
                "A nextJS app for detecting chords based on piano notes.",
            tech: [
                {
                    icon_path: "",
                    name: "NextJS",
                },
                {
                    icon_path: "",
                    name: "Firebase",
                },
                {
                    icon_path: "",
                    name: "Tailwind CSS",
                },
            ],
        },
        {
            url: "https://tasks-app-self.vercel.app",
            githubUrl: "https://github.com/danielpik18/tasks-app",
            image_path: "tasks-app-screenshot.png",
            title: "Tasks App",
            description:
                "A simple app for creating and organizing your own personal tasks.",
            tech: [
                {
                    icon_path: "",
                    name: "NextJS",
                },
                {
                    icon_path: "",
                    name: "Firebase",
                },
                {
                    icon_path: "",
                    name: "Tailwind CSS",
                },
            ],
        },
        {
            url: "https://neos-records.onrender.com/",
            githubUrl: "https://github.com/danielpik18/neos-records",
            image_path: "neos-records-thumbnail.png",
            title: "Neos Records",
            description: "A demo website for Neos Record's music label",
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
            url: "https://chat-rooms-app.onrender.com/",
            githubUrl: "https://github.com/danielpik18/chatroomsapp",
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
                    name: "CSS",
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
                    These are some{" "}
                    <span style={{ color: "var(--peach-yellow)" }}>
                        projects I've worked on.
                    </span>
                </h1>
                <div className="separator"></div>

                <div className={styles.projects__list}>{content}</div>
            </div>
        </div>
    );
};

export default Projects;

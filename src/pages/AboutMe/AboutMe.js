import React from "react";
import styles from "./AboutMe.module.scss";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMe__sides}>
                <div className={styles.aboutMe__left}>
                    <img
                        src={require("pages/AboutMe/img/me-color.jfif")}
                        alt=""
                    />
                </div>
                <div className={styles.aboutMe__right}>
                    <h1 className={styles.helloWorld}>
                        &#60;Hi there! &#47;&#62;
                    </h1>
                    <p>
                        I'm <strong>Daniel Mantilla</strong>
                        , a Web Developer based in <br />
                        <img
                            src={
                                require("pages/AboutMe/img/colombia.svg")
                                    .default
                            }
                        />{" "}
                        Colombia, with <strong>+4 years</strong> of experience
                        building web applications using technologies like{" "}
                        <strong>
                            HTML5, CSS3, React, Angular, PHP & more.
                        </strong>
                    </p>
                </div>
            </div>

            <NavLink className={styles.aboutMe__button} to={"/projects"}>
                My projects
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>{" "}
                    </g>
                </svg>
            </NavLink>
        </div>
    );
};

export default AboutMe;

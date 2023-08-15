import React from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMe__sides}>
                <div className={styles.aboutMe__left}>
                    <img src={require("pages/AboutMe/img/me-bw.jpg")} alt="" />
                </div>
                <div className={styles.aboutMe__right}>
                    <h1 className={styles.helloWorld}>
                        &#60;Hello World! &#47;&#62;
                    </h1>
                    <p>
                        I'm <strong>Daniel Mantilla</strong>, a Web Developer
                        based in{" "}
                        <img
                            src={
                                require("pages/AboutMe/img/colombia.svg")
                                    .default
                            }
                        />{" "}
                        Colombia, with +3 years of experience building web pages
                        and applications using technologies like{" "}
                        <strong>
                            HTML5, CSS3, React, Angular, PHP & more.
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

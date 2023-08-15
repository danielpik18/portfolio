import styles from "./Contact.module.scss";

function Contact() {
    return (
        <div class={styles.contact}>
            <h1 class="title">Let's get in touch!</h1>
            <div class="separator"></div>

            <div class={styles.contact__items}>
                <div class={styles.contact__item}>
                    <img
                        src={require(`pages/Contact/img/mail.svg`).default}
                        alt=""
                    />
                    danielmomusic@gmail.com
                </div>

                <div class={styles.contact__item}>
                    <img
                        src={require(`pages/Contact/img/phone.svg`).default}
                        alt=""
                    />
                    (+57) 312 6038598
                </div>

                <div class={styles.contact__item}>
                    <img
                        src={require(`pages/Contact/img/linkedin.svg`).default}
                        alt=""
                    />
                    <a
                        target="_blank"
                        href="https://co.linkedin.com/in/daniel-andr%C3%A9s-mantilla-ochoa-ba5443129"
                        rel="noreferrer"
                    >
                        Visit my linkedIn profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

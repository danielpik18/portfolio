import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const listItems = [
        {
            name: "About Me",
            icon: (
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 22L2 22"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M4 22V9.5"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M20 9.5V13.5M20 22V17.5"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                        stroke="#fff"
                        stroke-width="1.5"
                    />
                </svg>
            ),
            path: "/",
        },
        {
            name: "Projects",
            icon: (
                <svg
                    fill="#ffffff"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <path d="M2,9H9V2H2ZM4,4H7V7H4Zm7-2V9h7V2Zm5,5H13V4h3ZM2,18H9V11H2Zm2-5H7v3H4Zm7,5h7V11H11Zm2-5h3v3H13Z" />
                    </g>
                </svg>
            ),
            path: "/projects",
        },
        {
            name: "Contact",
            icon: (
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 512 512"
                    version="1.1"
                >
                    <title>contact-details</title>
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="icon"
                            fill="#ffffff"
                            transform="translate(42.666667, 85.333333)"
                        >
                            <path
                                d="M426.666667,1.42108547e-14 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L426.666667,1.42108547e-14 Z M384,42.6666667 L42.6666667,42.6666667 L42.6666667,298.666667 L384,298.666667 L384,42.6666667 Z M341.333333,213.333333 L341.333333,245.333333 L234.666667,245.333333 L234.666667,213.333333 L341.333333,213.333333 Z M146.666667,155.733333 C177.493333,155.733333 202.666667,181.333333 202.666667,213.333333 L74.6666667,213.333333 C74.6666667,181.333333 99.7387207,155.733333 130.666667,155.733333 L146.666667,155.733333 Z M341.333333,149.333333 L341.333333,181.333333 L234.666667,181.333333 L234.666667,149.333333 L341.333333,149.333333 Z M138.666667,78.62624 C154.13064,78.62624 166.666667,91.162267 166.666667,106.62624 C166.666667,122.090213 154.13064,134.62624 138.666667,134.62624 C123.202694,134.62624 110.666667,122.090213 110.666667,106.62624 C110.666667,91.162267 123.202694,78.62624 138.666667,78.62624 Z M341.333333,85.3333333 L341.333333,117.333333 L234.666667,117.333333 L234.666667,85.3333333 L341.333333,85.3333333 Z"
                                id="Combined-Shape"
                            ></path>
                        </g>
                    </g>
                </svg>
            ),
            path: "/contact",
        },
    ];

    const navbarLinks = listItems.map((listItem) => {
        return (
            <li
                className={`${
                    listItem.name === "Login" ? styles.navbar__login : ""
                }`}
                key={listItem.path}
            >
                <NavLink
                    to={listItem.path}
                    end
                    className={({ isActive, isPending }) =>
                        isPending
                            ? styles.navbar__linkPending
                            : isActive
                            ? styles.navbar__linkActive
                            : ""
                    }
                >
                    {listItem.icon}
                    <p>{listItem.name}</p>
                </NavLink>
            </li>
        );
    });

    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar__links}>{navbarLinks}</ul>
        </div>
    );
};

export default Navbar;

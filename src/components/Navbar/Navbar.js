import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const listItems = [
    {
      name: "About Me",
      icon: "home.svg",
      path: "/",
    },
    {
      name: "Projects",
      icon: "projects.svg",
      path: "/projects",
    },
    {
      name: "Contact",
      icon: "contact.svg",
      path: "/contact",
    },
  ];

  const navbarLinks = listItems.map((listItem) => {
    return (
      <li
        className={`${listItem.name === "Login" ? styles.navbar__login : ""}`}
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
          <img
            className={styles.navbar__listItemIcon}
            src={require(`./img/${listItem.icon}`)}
            alt="icon"
          />
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

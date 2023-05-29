import { FC, useState } from "react";
import styles from "../styling/sidebar.module.scss";
import Link from "next/link";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.content}>
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/campaigns">Campaigns</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.hamburger_btn}>
        <button
          className={toggle ? `${styles.burgerOpen}` : `${styles.burger} `}
          onClick={toggleMenu}
        ></button>
      </div>
      {toggle ? (
        <div className={styles.hamburger}>
          <div className={styles.content}>
            <ul>
              <li>
                <Link onClick={toggleMenu} href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/campaigns">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/users">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;

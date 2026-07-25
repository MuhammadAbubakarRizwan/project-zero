"use client";

import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.glow} aria-hidden="true" />

      <nav className={styles.nav}>
        <span className={styles.navMark}></span>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.hero}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          BSE, Virtual University of Pakistan
        </p>
        <h1 className={styles.name}>
          Muhammad
          <br />
          <span className={styles.nameGradient}>Abubakar Rizwan</span>
        </h1>
        <p className={styles.tagline}>
          Unity 3D developer and PHP engineer. I ship small game systems and
          the backends that keep them running.
        </p>
      </div>
    </header>
  );
}

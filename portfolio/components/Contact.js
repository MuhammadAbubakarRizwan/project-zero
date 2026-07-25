import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <span className={styles.headingMono}>04</span> Contact
        </h2>

        <p className={styles.lead}>
          Open to Unity and PHP work. The fastest way to reach me is email.
        </p>

        <div className={styles.links}>
          <a
            href="mailto:abubakrrizwan5@gmail.com"
            className={styles.linkRow}
          >
            <span className={styles.linkLabel}>Email</span>
            <span className={styles.linkValue}>
              abubakrrizwan5@gmail.com
            </span>
          </a>
          <a
            href="https://github.com/MuhammadAbubakarRizwan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkRow}
          >
            <span className={styles.linkLabel}>GitHub</span>
            <span className={styles.linkValue}>
              github.com/MuhammadAbubakarRizwan
            </span>
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Muhammad Abubakar Rizwan — built with Next.js</p>
      </footer>
    </section>
  );
}

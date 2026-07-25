import styles from "./Projects.module.css";
import GalleryMockup from "./GalleryMockup";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <span className={styles.headingMono}>03</span> Projects
        </h2>

        <article className={styles.card}>
          <div className={styles.mockup}>
            <GalleryMockup />
          </div>

          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              <p className={styles.cardKicker}>web application</p>
              <h3 className={styles.cardTitle}>Gallery App</h3>
            </div>
            <p className={styles.cardDesc}>
              An image gallery application built with PHP on the backend and
              jQuery for interactive, client-side behavior.
            </p>
            <ul className={styles.stack}>
              <li>PHP</li>
              <li>jQuery</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

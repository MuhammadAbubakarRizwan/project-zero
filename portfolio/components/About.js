import styles from "./About.module.css";

const LOG = [
  {
    year: "2016",
    tag: "v0.1",
    role: "Sub-Engineer",
    org: "MAS Engineers",
    note: "Started in engineering support, working through 2019.",
  },
  {
    year: "2020",
    tag: "v0.2",
    role: "Engineer",
    org: "MES",
    note: "Joined MES, moving into a broader engineering role.",
  },
  {
    year: "2021",
    tag: "v0.3",
    role: "Unity 3D Game Developer",
    org: "Mobaso & Raycast",
    note: "Shifted into game development, building with Unity and C#.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <span className={styles.headingMono}>01</span> About
        </h2>
        <p className={styles.summary}>
          I'm currently completing a BSE at Virtual University of Pakistan.
          My path into software ran through hardware and engineering support
          before landing in game development — here's the log.
        </p>

        <ol className={styles.log}>
          {LOG.map((entry, i) => (
            <li key={entry.tag} className={styles.entry}>
              <div className={styles.entryMeta}>
                <span className={styles.entryTag}>{entry.tag}</span>
                <span className={styles.entryYear}>{entry.year}</span>
              </div>
              <div className={styles.entryBody}>
                <p className={styles.entryRole}>
                  {entry.role}
                  <span className={styles.entryOrg}> · {entry.org}</span>
                </p>
                <p className={styles.entryNote}>{entry.note}</p>
              </div>
              {i < LOG.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    label: "engine & language",
    items: ["Unity", "C#"],
  },
  {
    label: "tooling",
    items: ["VS Code", "Android Studio"],
  },
  {
    label: "backend",
    items: ["PHP"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <span className={styles.headingMono}>02</span> Skills
        </h2>

        <div className={styles.groups}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className={styles.group}>
              <p className={styles.groupLabel}>{group.label}</p>
              <ul className={styles.tagList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Praveenkumar</div>
      <div className={`${styles.content} ${styles.textMute}`}>
        SDE | Gamer (who doesn&apos;t have time to play) | Freelancer
      </div>
      <div style={{ marginTop: 25 }}>
        Experienced Software Engineer with 2+ years of expertise in Node.js and
        RoR.
      </div>
      <div style={{ marginTop: 25 }}>
        Skilled in JavaScript, TypeScript, Ruby, SQL, NoSQL, Node.js, React.js
        and Ruby on Rails. Passionate about delivering high-quality solutions
        and staying updated with industry advancements.
      </div>
      <div style={{ marginTop: 25 }}></div>
    </main>
  );
}

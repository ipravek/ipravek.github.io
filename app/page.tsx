import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Praveenkumar</div>
      <div className={styles.content}>Hey, I&apos;m Pk</div>
      <div style={{marginTop: 25}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        nobis, adipisci in quae provident non alias explicabo ad est quia?
      </div>
      <div style={{marginTop: 25}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        nobis, adipisci in quae provident non alias explicabo ad est quia?
      </div>{" "}
      <div style={{marginTop: 25}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        nobis, adipisci in quae provident non alias explicabo ad est quia?
      </div>
    </main>
  );
}

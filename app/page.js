import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Hello World</h1>
          <p>
            #PBW3B1PBL0101<br></br>
            261080200077 Dion Aldi Darmawan <br></br>
            Framework Pilihan → Javascript[7] - Next.js
          </p>
          <p>
            URL Repo :{" "}
            <a href="https://github.com/Virionz07/pbw0101.git">
              {" "}
              https://github.com/Virionz07/pbw0101.git{" "}
            </a>
          </p>
          <p>TIME : 2026-09-22 10.42</p>
        </div>
      </main>
    </div>
  );
}

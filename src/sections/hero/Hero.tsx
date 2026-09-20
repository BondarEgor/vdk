import { useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useRef(null);

  return (
    <section className={styles.hero} id="top" ref={ref}>
      <img
        className={styles.bg}
        src="/images/sopki.jpeg"
        sizes="100vw"
        fetchPriority="high"
        alt="Владивосток на рассвете: вантовый мост через пролив, бухты и сопки в утренней дымке"
      />
      <div className={styles.scrim} aria-hidden="true" />

      <h1 className={styles.title}>Владивосток</h1>

      <p className={styles.tag}>город у моря · на краю континента</p>

      <a className={styles.scroll} href="#sea" aria-label="Листать дальше">
        <span aria-hidden="true" />
      </a>
    </section>
  );
}

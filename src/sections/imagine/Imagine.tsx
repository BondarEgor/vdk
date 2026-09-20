import Reveal from "../../shared/reveal/Reveal.tsx";
import styles from "./Imagine.module.css";

export default function Imagine() {
  return (
    <section className={styles.section}>
      <img
        className={styles.bg}
        src="/images/imagine.webp"
        srcSet="/images/imagine-960.webp 960w, /images/imagine.webp 1376w"
        sizes="100vw"
        width={1376}
        height={768}
        loading="lazy"
        alt="Человек у ограды набережной смотрит на рассвет над мостом и бухтой"
      />
      <div className={styles.scrim} aria-hidden="true" />
      <div className={`wrap ${styles.wrap}`}>
        <Reveal>
          <h2 className={styles.title}>
            А что, если следующий рассвет встретить уже здесь?
          </h2>
          <p className={styles.note}>
            Владивосток не обещает лёгкого старта. Он обещает настоящий.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

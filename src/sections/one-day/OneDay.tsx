import Reveal from "../../shared/reveal/Reveal.tsx";
import styles from "./OneDay.module.css";

export default function OneDay() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <Reveal>
          <p className={styles.overline}>один день</p>
          <h2 className={styles.title}>Жизнь у моря выглядит так</h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.morning}>
            <figure>
              <img
                src="/images/morning.webp"
                srcSet="/images/morning-640.webp 640w, /images/morning.webp 928w"
                sizes="(max-width: 900px) 88vw, 52vw"
                width={928}
                height={1152}
                loading="lazy"
                alt="Чашка кофе на подоконнике, за окном — рассвет над бухтой и мостом"
              />
              <figcaption>
                <p className={styles.time}>
                  <b>07:00</b>
                  <span>утро</span>
                </p>
                <p className={styles.caption}>
                  Утро начинается с вида, который обычно оставляют для выходных.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={140} className={styles.day}>
            <figure>
              <img
                src="/images/day.webp"
                srcSet="/images/day-640.webp 640w, /images/day.webp 896w"
                sizes="(max-width: 900px) 78vw, 38vw"
                width={896}
                height={1200}
                loading="lazy"
                alt="Пешеходная набережная днём: люди, порт и мост через бухту"
              />
              <figcaption>
                <p className={styles.time}>
                  <b>13:00</b>
                  <span>день</span>
                </p>
                <p className={styles.caption}>
                  Обед можно вынести на набережную.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100} className={styles.evening}>
            <figure>
              <img
                src="/images/evening.webp"
                srcSet="/images/evening-960.webp 960w, /images/evening.webp 1584w"
                sizes="(max-width: 900px) 94vw, 80vw"
                width={1584}
                height={672}
                loading="lazy"
                alt="Вечерняя панорама Владивостока: огни города и моста над бухтой"
              />
              <figcaption>
                <p className={styles.time}>
                  <b>21:00</b>
                  <span>вечер</span>
                </p>
                <p className={styles.caption}>
                  А вечером город снова меняет свет.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

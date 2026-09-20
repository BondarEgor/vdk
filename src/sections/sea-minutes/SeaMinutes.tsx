import Reveal from "../../shared/reveal/Reveal.tsx";
import styles from "./SeaMinutes.module.css";

const facts = [
  { value: "43°", note: "северной широты — примерно как Сочи и Марсель" },
  {
    value: "324 м",
    note: "пилоны Русского моста — высочайшие мостовые пилоны в мире",
  },
  {
    value: "740 км",
    note: "по прямой до Сеула; до Москвы — почти в девять раз дальше",
  },
  {
    value: "+7 ч",
    note: "к московскому времени: рассвет здесь начинается раньше",
  },
];

export default function SeaMinutes() {
  return (
    <section className={styles.section} id="sea">
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <Reveal>
            <p className={styles.overline}>не просто город</p>
            <h2 className={styles.title}>
              Здесь расстояние до моря измеряется минутами.
            </h2>
            <p className={styles.lead}>
              Владивосток стоит на сопках между бухтами, поэтому море видно
              почти из любого окна. Это не курортная открытка — это рабочая
              география города: порт, мосты, океанская вода и горизонт, который
              не прячется за домами.
            </p>

            <p className={styles.lead}>
              Владивосток стоит на сопках между бухтами, поэтому море видно
              почти из любого окна. Это не курортная открытка — это рабочая
              география города: порт, мосты, океанская вода и горизонт, который
              не прячется за домами.
            </p>
          </Reveal>
          <Reveal delay={120} className={styles.photoSlot}>
            <figure className={styles.photo}>
              <img
                src="/images/bay-city.webp"
                srcSet="/images/bay-city-640.webp 640w, /images/bay-city.webp 928w"
                sizes="(max-width: 900px) 90vw, 44vw"
                width={928}
                height={1152}
                loading="lazy"
                alt="Бухта Золотой Рог утром: суда, порт и город на сопках в дымке"
              />
            </figure>
          </Reveal>
        </div>

        <div className={styles.facts}>
          {facts.map((fact, i) => (
            <Reveal key={fact.value} delay={i * 90} className={styles.fact}>
              <p className={styles.value}>{fact.value}</p>
              <p className={styles.note}>{fact.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

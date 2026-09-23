import { Card } from "../../components/card/index.tsx";
import { Col } from "../../shared/col/index.tsx";
import Reveal from "../../shared/reveal/Reveal.tsx";
import { Row } from "../../shared/row/index.tsx";
import s from "./OneDay.module.css";

export default function OneDay() {
  return (
    <section className={s.section}>
      <div className="wrap">
        <Reveal>
          <p className={s.overline}>один день</p>
          <h2 className={s.title}>Жизнь у моря выглядит так</h2>
        </Reveal>

        <div className={s.grid}>
          <Reveal className={s.morning}>
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
                <p className={s.time}>
                  <b>07:00</b>
                  <span>утро</span>
                </p>
                <p className={s.caption}>
                  Утро начинается с вида, который обычно оставляют для выходных.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={140} className={s.day}>
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
                <p className={s.time}>
                  <b>13:00</b>
                  <span>день</span>
                </p>
                <p className={s.caption}>Обед можно вынести на набережную.</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

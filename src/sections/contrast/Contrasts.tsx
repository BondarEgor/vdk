import Reveal from "../../shared/reveal/Reveal.tsx";
import s from "./Contrasts.module.css";

export default function Contrasts() {
  return (
    <section className={s.section}>
      <div className="wrap">
        <Reveal>
          <p className={s.overline}>город контрастов</p>
          <h2 className={s.title}>Город, где всё рядом — и всё большое.</h2>
        </Reveal>

        <div className={s.collage}>
          <Reveal className={s.sea}>
            <figure>
              <img
                src="/images/coast.webp"
                srcSet="/images/coast-900.webp 900w, /images/coast.webp 1264w"
                sizes="(max-width: 900px) 92vw, 58vw"
                width={1264}
                height={848}
                loading="lazy"
                alt="Скалистый берег моря в тумане, на горизонте — маяк"
              />
              <figcaption className={s.seaCaption}>
                Море здесь — не событие, а часть маршрута.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className={s.asia}>
            <h3>Азия рядом</h3>
            <ul>
              <li>
                <b>740 км</b> Сеул
              </li>
              <li>
                <b>1 060 км</b> Токио
              </li>
            </ul>
            <img
              src="/images/asia-port.webp"
              srcSet="/images/asia-port-560.webp 560w, /images/asia-port.webp 848w"
              sizes="(max-width: 900px) 92vw, 34vw"
              width={848}
              height={1264}
              loading="lazy"
              alt="Паром выходит из порта в сумерках, огни терминала на воде"
            />
          </Reveal>

          <Reveal delay={80} className={s.food}>
            <h3>Море на столе</h3>
            <p>
              Гребешок, краб и пян-се с набережной — не гастрономический туризм,
              а обычный вторник.
            </p>
          </Reveal>

          <Reveal delay={160} className={s.sopki}>
            <figure>
              <img
                src="/images/sopki.webp"
                srcSet="/images/sopki-900.webp 900w, /images/sopki.webp 1264w"
                sizes="(max-width: 900px) 92vw, 30vw"
                width={1264}
                height={848}
                loading="lazy"
                alt="Зелёные сопки в тумане, между ними — город и море"
              />
              <figcaption>
                Сопки вместо плоских улиц: у города всегда есть рельеф — и
                видовые.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={220} className={s.geo}>
            <p className={s.coords}>
              43°07′ с. ш.
              <br />
              131°53′ в. д.
            </p>
            <p>Край континента. Дальше — только океан.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

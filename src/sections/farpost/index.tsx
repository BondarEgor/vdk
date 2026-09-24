import { useState } from "react";
import { Card } from "../../components/card/index.tsx";
import { Col } from "../../shared/col/index.tsx";
import Reveal from "../../shared/reveal/Reveal.tsx";
import { Row } from "../../shared/row/index.tsx";
import { cards } from "./cards.ts";
import s from "./styles.module.css";

const renderCard = (card: (typeof cards)[keyof typeof cards]) => (
  <Card
    header={<span className={s.cardHeader}>{card.header}</span>}
    main={
      <Col gap={8}>
        <span className={s.cardTitle}>{card.title}</span>
        <span className={s.cardText}>{card.text}</span>
      </Col>
    }
    footer={
      <Col gap={6}>
        {card.footer.map((item) => (
          <span key={item} className={s.cardFact}>
            {item}
          </span>
        ))}
      </Col>
    }
  />
);

const renderImage = (src: string, alt: string) => (
  <div className={s.image}>
    <img src={src} alt={alt} />
  </div>
);

type TimeZone = {
  city: string;
  zone: string;
  offset: string;
};

const TIME_ZONES: TimeZone[] = [
  {
    city: "Владивосток",
    zone: "VLAT",
    offset: "UTC+10",
  },
  {
    city: "Москва",
    zone: "MSK",
    offset: "UTC+3",
  },
  {
    city: "Самара",
    zone: "SAMT",
    offset: "UTC+4",
  },
  {
    city: "Екатеринбург",
    zone: "YEKT",
    offset: "UTC+5",
  },
  {
    city: "Новосибирск",
    zone: "NOVT",
    offset: "UTC+7",
  },
  {
    city: "Красноярск",
    zone: "KRAT",
    offset: "UTC+7",
  },
  {
    city: "Иркутск",
    zone: "IRKT",
    offset: "UTC+8",
  },
  {
    city: "Якутск",
    zone: "YAKT",
    offset: "UTC+9",
  },
  {
    city: "Магадан",
    zone: "MAGT",
    offset: "UTC+11",
  },
  {
    city: "Камчатка",
    zone: "PETT",
    offset: "UTC+12",
  },
];

export default function FarPost() {
  const [timeZone, setTimeZone] = useState(0);
  const currentTimeZone = TIME_ZONES[timeZone];

  return (
    <section className={s.container} id="sea">
      <div className={s.wrapper}>
        <Reveal>
          <div className={s.headingContainer}>
            <Col gap={6} className={s.heading}>
              <span className={s.gates}>ТИХООКЕАНСКИЕ ВОРОТА РОССИИ</span>

              <span className={s.economy}>
                Экономический и культурный форпост Дальнего Востока
              </span>

              <span className={s.vdk}>
                Владивосток — динамично развивающийся мегаполис, объединяющий
                логистические артерии АТР, передовые преференциальные режимы и
                уникальное культурное наследие.
              </span>
            </Col>

            <Row justifyContent="space-between" className={s.timeZone} gap={12}>
              <Col>
                <span>ЧАСОВОЙ ПОЯС</span>

                <span>
                  {currentTimeZone.city} — {currentTimeZone.zone} (
                  {currentTimeZone.offset})
                </span>
              </Col>

              <Row alignItems="flex-start">
                <button
                  className={s.switch}
                  onClick={() => setTimeZone((p) => Math.max(0, p - 1))}
                >
                  {"<"}
                </button>
                <button
                  className={s.switch}
                  onClick={() =>
                    setTimeZone((p) => Math.min(p + 1, TIME_ZONES.length - 1))
                  }
                >
                  {">"}
                </button>
              </Row>
            </Row>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className={s.grid}>
            {renderImage("/images/evening.webp", "Владивосток, вид на бухту")}
            {renderCard(cards.initiative)}

            {renderCard(cards.regime)}
            {renderImage("/images/asia-port.webp", "Порт Владивостока")}

            {renderImage("/images/bay-city.webp", "Город на берегу бухты")}
            {renderCard(cards.transport)}

            {renderCard(cards.culture)}
            {renderCard(cards.scale)}

            {renderCard(cards.investment)}
            {renderImage("/images/hero-1376.webp", "Владивосток с высоты")}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Row
            justifyContent="space-between"
            alignItems="center"
            gap={16}
            className={s.summary}
          >
            <span className={s.summaryText}>
              Стратегический профиль — комплексная интеграция всех режимов и
              инструментов развития региона.
            </span>

            <Row gap={12}>
              <a className={s.linkGhost} href="#profile">
                Смотреть профиль
              </a>
              <a className={s.linkAccent} href="#contact">
                Начать проект →
              </a>
            </Row>
          </Row>
        </Reveal>
      </div>
    </section>
  );
}

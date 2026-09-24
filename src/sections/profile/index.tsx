import { Card } from "../../components/card/index.tsx";
import { Col } from "../../shared/col/index.tsx";
import Reveal from "../../shared/reveal/Reveal.tsx";
import { Row } from "../../shared/row/index.tsx";
import { cards } from "../farpost/cards.ts";
import s from "./styles.module.css";

const stats = [
  { value: "100%", label: "Преференциальное покрытие региона" },
  { value: "0%", label: "Налог на прибыль первые 5 лет" },
  { value: "2 800+", label: "Инвестпроектов в работе" },
  { value: "№1", label: "Таможенный коридор Азии" },
];

const tags = [
  "Все векторы (6)",
  "Морская логистика",
  "Преобразование ТОР",
  "Культура и Туризм",
];

const Fact = ({ children }: { children: string }) => {
  const [label, value] = children.split(": ");

  return (
    <Col gap={2}>
      <span className={s.factLabel}>{label}</span>
      <span className={s.factValue}>{value ?? label}</span>
    </Col>
  );
};

export default function Profile() {
  return (
    <section className={s.container} id="profile">
      <div className={s.wrapper}>
        <Reveal>
          <Row
            justifyContent="space-between"
            alignItems="flex-start"
            gap={20}
            className={s.headingContainer}
          >
            <Col gap={6} className={s.heading}>
              <span className={s.overline}>
                МУЛЬТИПЛИКАТИВНАЯ РЕГИОНАЛЬНАЯ МОДЕЛЬ
              </span>

              <span className={s.title}>
                Стратегический профиль — альтернативный ракурс
              </span>

              <span className={s.text}>
                Шесть векторов развития края: инвестиционные режимы, бюджетная
                поддержка, преференциальные таможенные коридоры, культурная и
                событийная экономика.
              </span>
            </Col>

            <span className={s.timeline}>Транспортная система · 2024→2030</span>
          </Row>
        </Reveal>

        <Reveal delay={100}>
          <Row gap={8} className={s.tags}>
            {tags.map((tag) => (
              <span key={tag} className={s.tag}>
                {tag}
              </span>
            ))}
          </Row>
        </Reveal>

        <Reveal delay={150}>
          <div className={s.stats}>
            {stats.map((stat) => (
              <Col key={stat.label} gap={4} className={s.stat}>
                <span className={s.statValue}>{stat.value}</span>
                <span className={s.statLabel}>{stat.label}</span>
              </Col>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className={s.grid}>
            {Object.values(cards).map((card) => (
              <Card
                key={card.title}
                className={s.card}
                header={
                  <Row justifyContent="space-between" alignItems="center">
                    <span className={s.cardHeader}>{card.header}</span>
                    <span className={s.badge}>{card.footer[0]}</span>
                  </Row>
                }
                main={
                  <Col gap={8}>
                    <span className={s.cardTitle}>{card.title}</span>
                    <span className={s.cardText}>{card.text}</span>
                  </Col>
                }
                footer={
                  <div className={s.facts}>
                    {card.footer.slice(1).map((item) => (
                      <Fact key={item}>{item}</Fact>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <Row
            justifyContent="space-between"
            alignItems="center"
            gap={16}
            className={s.footer}
          >
            <span className={s.footerText}>
              Реестр инвестиционных возможностей — обсудим решение под ваш
              проект.
            </span>

            <a className={s.linkAccent} href="#contact">
              Обсудить проект →
            </a>
          </Row>
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Card } from "../../components/card/index.tsx";
import { Col } from "../../shared/col/index.tsx";
import Reveal from "../../shared/reveal/Reveal.tsx";
import { Row } from "../../shared/row/index.tsx";
import s from "./styles.module.css";

const cards = {
  initiative: {
    header: "01 / Инициатива",
    title: "РЕГИОНАЛЬНАЯ ПОДДЕРЖКА",
    text: "Комплексные меры стимулирования бизнеса, налоговые льготы для резидентов и инвестиционных проектов Дальнего Востока.",
    footer: [
      "Приоритет: Высокий",
      "Субсидирование ставок: Инвестпроекты",
      "Инфраструктура: Готовые площадки",
      "Окно инвестора: Одно окно КРДВ",
    ],
  },

  regime: {
    header: "02 / Режим",
    title: "ТОР И СВОБОДНЫЙ ПОРТ",
    text: "Уникальный преференциальный режим с упрощенным таможенным и налоговым регулированием для резидентов.",
    footer: [
      "Свободная зона",
      "Таможенная пошлина: 0% (СТЗ)",
      "Страховые взносы: 7.6% вместо 30%",
      "Ускоренное возмещение: НДС за 10 дней",
      "Налог на прибыль (первые 5 лет): 0%",
    ],
  },

  transport: {
    header: "03 / Транспорт",
    title: "МОРСКАЯ ЛОГИСТИКА",
    text: "Мощнейшие глубоководные порты, контейнерные терминалы и интеграция в международные коридоры.",
    footer: [
      "Хаб АТР",
      "Грузооборот акватории: Рекордный рост",
      "Связанность с Транссибом: Прямой стык",
      "Навигация: 365 дней / год",
    ],
  },

  culture: {
    header: "04 / Культура",
    title: "ТУРИЗМ И КУЛЬТУРА",
    text: "Уникальная архитектура, Приморская сцена Мариинского театра, филиалы Эрмитажа и Третьяковской галереи.",
    footer: [
      "Направление №1",
      "Театральная сцена: Мариинский театр",
      "Музейный квартал: Эрмитаж & Третьяковка",
      "Событийный поток: ВЭФ, фестивали",
    ],
  },

  scale: {
    header: "05 / Масштаб",
    title: "АРКТИКО-ТИХООКЕАНСКИЙ УЗЕЛ",
    text: "Стратегический форпост на пересечении морских путей Северного морского пути и глобальных линий стран Восточной Азии.",
    footer: [
      "Глобальный вектор",
      "Сокращение плеча: до 40% по СМП",
      "Каботажные рейсы: Регулярные",
      "Азиатские рынки: Китай, Вьетнам, Индия",
    ],
  },

  investment: {
    header: "06 / Инвестиции",
    title: "СПЕЦПРОГРАММЫ",
    text: "Льготное финансирование проектов развития, дальневосточная ипотека и программа «Гектар на Дальнем Востоке».",
    footer: [
      "Инструменты роста",
      "Дальневосточная ипотека: 2% годовых",
      "Земельный гектар: Бесплатно online",
      "ФРДВ инструменты: Фондирование капзатрат",
    ],
  },
};

const renderCard = (card: (typeof cards)[keyof typeof cards], gap: number) => (
  <Card
    gap={gap}
    header={<span>{card.header}</span>}
    main={
      <Col gap={8}>
        <span>{card.title}</span>
        <span>{card.text}</span>
      </Col>
    }
    footer={
      <Col gap={6}>
        {card.footer.map((item) => (
          <span key={item}>{item}</span>
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
            {renderCard(cards.initiative, 120)}
            {renderImage("/images/asia-port-560.webp", "Владивосток")}

            {renderImage("/images/bay-city-640.webp", "Владивосток")}
            {renderCard(cards.regime, 32)}

            {renderCard(cards.transport, 224)}
            {renderImage("/images/coast-900.webp", "Приморский край")}

            {renderCard(cards.culture, 36)}
            {renderCard(cards.scale, 28)}

            {renderCard(cards.investment, 330)}
            {renderImage("/images/coast-900.webp", "Приморский край")}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

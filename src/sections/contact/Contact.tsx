import { useState } from "react";
import { Col } from "../../shared/col/index.tsx";
import Reveal from "../../shared/reveal/Reveal.tsx";
import { Row } from "../../shared/row/index.tsx";
import s from "./Contact.module.css";

const empty = { name: "", contact: "", project: "", budget: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Подскажите, как к вам обращаться";
  if (!values.contact.trim())
    errors.contact = "Оставьте почту, телефон или телеграм";
  return errors;
}

const contacts = [
  {
    title: "СВЯЗЬ",
    lines: ["invest@vladivostok.city", "+7 (423) 240-20-10", "@vdk_invest"],
  },
  {
    title: "КООРДИНАТЫ",
    lines: [
      "43.1155° N — 131.8855° E",
      "VLAT · UTC+10",
      "Залив Петра Великого",
    ],
  },
];

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const setField = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      document.getElementById(`field-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  return (
    <footer className={s.container} id="contact">
      <div className={s.wrapper}>
        <Reveal>
          <div className={s.top}>
            <Col gap={12} className={s.intro}>
              <span className={s.overline}>ВЛАДИВОСТОК · НАЧАТЬ ДИАЛОГ</span>

              <span className={s.title}>Свяжитесь с нами</span>

              <span className={s.lead}>
                Расскажите о проекте — вернёмся с подбором площадок, режимов и
                мер поддержки в течение двух рабочих дней.
              </span>
            </Col>

            {status === "success" ? (
              <div className={s.success} role="status">
                <span className={s.successTitle}>Заявка отправлена</span>
                <span className={s.cardText}>
                  Мы получили контакт и напишем в ближайшее время. До встречи у
                  моря.
                </span>
              </div>
            ) : (
              <form className={s.form} onSubmit={onSubmit} noValidate>
                <div className={s.fields}>
                  <div className={s.field}>
                    <label htmlFor="field-name">Имя</label>
                    <input
                      id="field-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                      value={values.name}
                      onChange={setField("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "field-name-error" : undefined
                      }
                    />
                    {errors.name && (
                      <p className={s.error} id="field-name-error">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className={s.field}>
                    <label htmlFor="field-contact">Контакт</label>
                    <input
                      id="field-contact"
                      name="contact"
                      type="text"
                      placeholder="Почта или телеграм"
                      value={values.contact}
                      onChange={setField("contact")}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={
                        errors.contact ? "field-contact-error" : undefined
                      }
                    />
                    {errors.contact && (
                      <p className={s.error} id="field-contact-error">
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  <div className={s.field}>
                    <label htmlFor="field-project">Название проекта</label>
                    <input
                      id="field-project"
                      name="project"
                      type="text"
                      placeholder="Например, терминал в бухте"
                      value={values.project}
                      onChange={setField("project")}
                    />
                  </div>

                  <div className={s.field}>
                    <label htmlFor="field-budget">Бюджет · необязательно</label>
                    <input
                      id="field-budget"
                      name="budget"
                      type="text"
                      placeholder="Ориентировочная вилка"
                      value={values.budget}
                      onChange={setField("budget")}
                    />
                  </div>
                </div>

                <Row
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={16}
                  className={s.actions}
                >
                  <span className={s.actionsText}>
                    {status === "submitting"
                      ? "Отправляем…"
                      : "Отправить заявку"}
                  </span>

                  <button
                    className={s.submit}
                    type="submit"
                    disabled={status === "submitting"}
                    aria-label="Отправить заявку"
                  >
                    {status === "submitting" ? "…" : "→"}
                  </button>
                </Row>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Row gap={32} className={s.contacts}>
            {contacts.map((group) => (
              <Col key={group.title} gap={8} className={s.contactsGroup}>
                <span className={s.overline}>{group.title}</span>
                {group.lines.map((line) => (
                  <span key={line} className={s.contactsLine}>
                    {line}
                  </span>
                ))}
              </Col>
            ))}
          </Row>
        </Reveal>

        <Row justifyContent="space-between" gap={12} className={s.bottom}>
          <span>© 2026 Владивосток · Инвестиционный портрет</span>
          <span>Золотой Рог · Тихий океан</span>
        </Row>
      </div>
    </footer>
  );
}

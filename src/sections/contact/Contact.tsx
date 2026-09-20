import { useState } from "react";
import Reveal from "../../shared/reveal/Reveal.tsx";
import styles from "./Contact.module.css";

const empty = { name: "", contact: "", question: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Подскажите, как к вам обращаться";
  if (!values.contact.trim())
    errors.contact = "Оставьте телеграм, телефон или почту";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

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
    await new Promise((resolve) => setTimeout(resolve, 900)); // имитация отправки
    setStatus("success");
  };

  return (
    <section className={styles.section} id="contact">
      <div className="wrap">
        <div className={styles.grid}>
          <Reveal>
            <p className={styles.overline}>первый шаг</p>
            <h2 className={styles.title}>
              Хотите узнать, как это — жить здесь?
            </h2>
            <p className={styles.lead}>
              Оставьте контакт — пришлем короткое письмо о переезде: районы,
              море, первые шаги. Без спама — только город как он есть.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {status === "success" ? (
              <div className={styles.success} role="status">
                <p className={styles.successTitle}>Спасибо!</p>
                <p>
                  Мы получили контакт и напишем в ближайшее время. А пока —
                  представьте рассвет.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={onSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="field-name">Имя</label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={setField("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "field-name-error" : undefined
                    }
                  />
                  {errors.name && (
                    <p className={styles.error} id="field-name-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="field-contact">
                    Телеграм, телефон или почта
                  </label>
                  <input
                    id="field-contact"
                    name="contact"
                    type="text"
                    value={values.contact}
                    onChange={setField("contact")}
                    aria-invalid={Boolean(errors.contact)}
                    aria-describedby={
                      errors.contact ? "field-contact-error" : undefined
                    }
                  />
                  {errors.contact && (
                    <p className={styles.error} id="field-contact-error">
                      {errors.contact}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="field-question">
                    Что хотелось бы узнать? · необязательно
                  </label>
                  <textarea
                    id="field-question"
                    name="question"
                    rows={2}
                    value={values.question}
                    onChange={setField("question")}
                  />
                </div>

                <button
                  className={styles.submit}
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Отправляем…"
                    : "Узнать больше о переезде"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

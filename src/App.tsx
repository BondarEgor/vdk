import Header from "./components/Header.tsx";
import Hero from "./sections/hero/Hero.tsx";
import SeaMinutes from "./sections/sea-minutes/SeaMinutes.tsx";
import OneDay from "./sections/one-day/OneDay.tsx";
import Contrasts from "./sections/contrast/Contrasts.tsx";
import Imagine from "./sections/imagine/Imagine.tsx";
import Contact from "./sections/contact/Contact.tsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Hero />
        <SeaMinutes />
        <OneDay />
        <Contrasts />
        <Imagine />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <div className={`wrap ${styles.wrap}`}>
          <span>Владивосток · 43°07′ с. ш.</span>
          <span className={styles.tagline}>
            город у моря на краю континента
          </span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}

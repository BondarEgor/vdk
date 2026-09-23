import Header from "./components/Header.tsx";
import Hero from "./sections/hero/Hero.tsx";
import FarPost from "./sections/farpost";
import OneDay from "./sections/one-day/OneDay.tsx";
import Contrasts from "./sections/contrast/Contrasts.tsx";
import Imagine from "./sections/imagine/Imagine.tsx";
import Contact from "./sections/contact/Contact.tsx";
import s from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />

      <main className={s.main}>
        <Hero />
        <FarPost />
        {/* <OneDay />
        <Contrasts />
        <Imagine />
        <Contact /> */}
      </main>

      {/* <footer className={s.footer}>
        <div className={`wrap ${s.wrap}`}>
          <span>Владивосток · 43°07′ с. ш.</span>
          <span className={s.tagline}>
            город у моря на краю континента
          </span>
          <span>© 2026</span>
        </div>
      </footer> */}
    </>
  );
}

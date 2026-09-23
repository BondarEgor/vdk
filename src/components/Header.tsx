import { useEffect, useState } from "react";
import s from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <a className={s.logo} href="#top">
        РелокацияРФ<span>.</span>
      </a>
      <a className={s.cta} href="#contact">
        Узнать о переезде
      </a>
    </header>
  );
}

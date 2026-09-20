import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.logo} href="#top">
        РелокацияРФ<span>.</span>
      </a>
      <a className={styles.cta} href="#contact">
        Узнать о переезде
      </a>
    </header>
  );
}

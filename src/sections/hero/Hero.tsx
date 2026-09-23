import { useEffect, useRef, useState } from "react";
import s from "./Hero.module.css";
import cn from "classnames";
export default function Hero() {
  const ref = useRef(null);
  const [isCrossedMid, setIsCrossedMid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsCrossedMid(true);
      } else {
        setIsCrossedMid(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={s.hero} id="top" ref={ref}>
      <img
        className={s.bg}
        src="/images/sopki.jpeg"
        sizes="100vw"
        fetchPriority="high"
        alt="Владивосток на рассвете: вантовый мост через пролив, бухты и сопки в утренней дымке"
      />
      <div
        className={cn(s.glass, isCrossedMid && s.active)}
        aria-hidden="true"
      />
      <div className={s.scrim} aria-hidden="true" />

      <h1 className={cn(s.title, isCrossedMid && s.blur)}>Владивосток</h1>

      {!isCrossedMid && (
        <>
          <p className={s.tag}>город у моря · на краю континента</p>

          <a className={s.scroll} href="#sea" aria-label="Листать дальше">
            <span aria-hidden="true" />
          </a>
        </>
      )}
    </section>
  );
}

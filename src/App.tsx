import Header from "./components/Header.tsx";
import Hero from "./sections/hero/Hero.tsx";
import FarPost from "./sections/farpost";
import Profile from "./sections/profile";
import Contact from "./sections/contact/Contact.tsx";
import s from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />

      <main className={s.main}>
        <Hero />
        <FarPost />
        <Profile />
        <Contact />
      </main>
    </>
  );
}

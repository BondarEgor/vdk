# Владивосток — лендинг «город у моря»

Одностраничный editorial-лендинг о Владивостоке как городе для жизни.
История ведёт от рассвета над мостами к спокойной форме заявки:
hero → «расстояние до моря измеряется минутами» → один день → город контрастов →
«а что, если следующий рассвет встретить уже здесь?» → контакт.

## Запуск

```bash
npm install
npm run dev      # разработка
npm run build    # продакшен-сборка
```

## Структура

```
src/
  App.tsx               сборка страницы + footer
  components/Header.tsx минимальный фиксированный header
  shared/Reveal.tsx     появление блоков при скролле (IntersectionObserver)
  sections/             по файлу на секцию: tsx + module.css
    Hero                фон → слово ВЛАДИВОСТОК → силуэт моста поверх
    SeaMinutes          факты и фото бухты
    OneDay              утро / день / вечер, диагональная композиция
    Contrasts           асимметричный коллаж
    Imagine             эмоциональный мост к CTA
    Contact             форма: default / focus / error / submitting / success
  styles/global.css     палитра, база, focus-visible, reduced-motion
public/images/          webp-рендеры (hero без lazy, остальное lazy)
scripts/
  prepare_images.py     одноразовая подготовка ассетов (chroma-key + webp)
  visual-qa.mjs         скриншоты для самопроверки (нужен playwright)
assets/raw/             исходники изображений
```

## Принципы

- React + CSS Modules, без UI-китов, роутинга и state-библиотек.
- Зависимости: только `react`, `react-dom` (+ vite в dev).
- Анимации — CSS и один IntersectionObserver; всё уважает
  `prefers-reduced-motion`.
- Факты на странице проверяемы: 43° с. ш., пилоны Русского моста 324 м,
  740/1060 км до Сеула/Токио по прямой, +7 ч к Москве.

## Ассеты

`public/images` уже собран. Пересобрать из `assets/raw`:

```bash
python3 scripts/prepare_images.py   # нужен Pillow
```

Силуэт моста для hero вырезается из изображения на маджента-фоне
простым chroma-key в том же скрипте.

## Визуальная проверка

```bash
npm i -D playwright && npx playwright install chromium --only-shell
node scripts/visual-qa.mjs          # скриншоты в assets/shots
```

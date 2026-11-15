# Black Lotus Piercing Studio — сайт

Сайт студии на [Next.js](https://nextjs.org/) 16 (React 19), на двух языках: чешском (`/`) и английском (`/en`).

## Где работает

- **Новый сайт (в разработке):** https://mediumspringgreen-bat-574082.hostingersite.com/ — Hostinger, Node.js-приложение.
- **lotuspiercing.cz** — пока старый сайт на WordPress. Не трогаем до переезда.

Hostinger сам собирает и выкладывает сайт после каждой отправки (push) в ветку `main` на GitHub. Обычно это занимает несколько минут.

## Где что лежит

| Что | Файл |
| --- | --- |
| Главная (CZ / EN) | `app/page.tsx`, `app/en/page.tsx` |
| Остальные страницы и ceník | `app/[slug]/page.tsx`, `app/en/[slug]/page.tsx` |
| Studio, Péče, Rezervace | `app/studio-page.tsx`, `app/care-page.tsx`, `app/booking-page.tsx` |
| Статьи | `app/journal/articles.ts`, `app/en/journal/articles.ts` |
| Шапка, подвал, меню | `app/site.tsx`, `app/mobile-menu.tsx` |
| Стили | `app/globals.css` |
| Фото и PDF | `public/assets/`, `public/documents/` |
| Адрес сайта, SEO, данные для Google | `app/seo.ts` |
| Превью для соцсетей | `public/og-image.jpg` |

## Переезд на lotuspiercing.cz

1. В `app/seo.ts` заменить `SITE_URL` на `"https://lotuspiercing.cz"` — canonical-ссылки, sitemap и превью переключатся сами, сайт откроется для Google.
2. Добавить перенаправления со старых адресов WordPress (`/contacts/`, `/pece-o-piercing/`, `/portfolio/` и др.).
3. Сделать резервную копию WordPress и переключить домен в Hostinger.

## Запуск на своём компьютере

Нужен Node.js 22.13 или новее.

```bash
npm ci          # установить зависимости (по package-lock.json)
npm run dev     # сайт на http://localhost:3000 с автообновлением
npm run build   # проверить, что сайт собирается
npm run lint    # проверить код
```

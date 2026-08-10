import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import LayoutClient from './LayoutClient';
import styles from './styles/global.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
  { rel: 'stylesheet', href: styles },
];

export default function App() {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio profesional Khairul Rizky, Developer & Programmer" />
        <title>Portofolio | Khairul Rizky - Developer & Programmer</title>
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutClient>
          <Outlet />
        </LayoutClient>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

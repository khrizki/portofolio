import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';

startTransition(() => {
  StrictMode(() => {
    RemixBrowser.hydrateRoot();
  });
});

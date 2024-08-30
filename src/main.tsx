import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import { RouterProvider } from 'react-router-dom';
import { router } from './routing';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

// TODO: configure locale later dynamically
const locale = 'en';

const { messages } = await import(`./locales/${locale}.po`);

i18n.load(locale, messages);
i18n.activate(locale);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nProvider>
  </StrictMode>
);

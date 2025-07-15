// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://mc-8.github.io/',
  integrations: [sitemap(), icon()],
  experimental: {
    fonts: [
      {
        cssVariable: '--be-vietnam-pro',
        name: 'Be Vietnam Pro',
        provider: fontProviders.fontsource()
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

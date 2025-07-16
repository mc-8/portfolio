// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://mc-8.github.io/',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
})

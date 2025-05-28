import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://effectivematching.org', 
  integrations: [mdx(), tailwind(), alpinejs(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    }
  }
});
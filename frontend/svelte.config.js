import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: '../dist',
      assets: '../dist',
      fallback: 'index.html',
      router: false,

      precompress: false,
      strict: true,
    }),
    prerender: { entries: ['*'] },
  }
};

export default config;
